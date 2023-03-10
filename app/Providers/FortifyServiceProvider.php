<?php

namespace App\Providers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Laravel\Fortify\Fortify;
use Illuminate\Support\Facades\Hash;
use App\Actions\Fortify\CreateNewUser;
use Illuminate\Support\ServiceProvider;
use Illuminate\Cache\RateLimiting\Limit;
use App\Actions\Fortify\ResetUserPassword;
use App\Actions\Fortify\UpdateUserPassword;
use Illuminate\Support\Facades\RateLimiter;
use Laravel\Fortify\Contracts\LogoutResponse;
use App\Actions\Fortify\UpdateUserProfileInformation;
use GuzzleHttp\Promise\Create;

class FortifyServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->instance(LogoutResponse::class, new class implements LogoutResponse {
            public function toResponse($request)
            {
                return redirect('/');
            }
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Fortify::createUsersUsing(CreateNewUser::class);
        Fortify::updateUserProfileInformationUsing(UpdateUserProfileInformation::class);
        Fortify::updateUserPasswordsUsing(UpdateUserPassword::class);
        Fortify::resetUserPasswordsUsing(ResetUserPassword::class);

        
        RateLimiter::for('login', function (Request $request) {
            $email = (string) $request->email;
            return Limit::perMinute(2000)->by($email);
        });

        RateLimiter::for('two-factor', function (Request $request) {
            return Limit::perMinute(2000)->by($request->session()->get('login.id'));
        });

        Fortify::loginView(function () {
            
              return Inertia::render('Auth.login');
        });
        Fortify::authenticateUsing(function (Request $request) {
            $user = User::where('email', $request->email)->first();
            if ($user && Hash::check($request->password, $user->password)) {
                    $user['token'] = $user->createToken('appToken')->accessToken;
                return $user;
                
            }
            
        });
        Fortify::twoFactorChallengeView(function () {
            return Inertia::render('Auth.two-factor-challenge');
        });

        Fortify::registerView(function () {
            return Inertia::render('Auth.register');
        });

        Fortify::requestPasswordResetLinkView(function () {
            return Inertia::render('Auth.forgot-password');
        });

        Fortify::resetPasswordView(function ($request) {
            return Inertia::render('Auth.reset-password', ['request' => $request]);
        });
        Fortify::verifyEmailView(function () {
            return Inertia::render('Auth.verify-email');
        });
        Fortify::confirmPasswordView(function () {
            return Inertia::render('Auth.confirm-password');
        });
    }
}
