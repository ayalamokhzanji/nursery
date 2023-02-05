<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Email;
use App\Models\Parents;
use Inertia\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Http\Resources\EmailsResource;
use App\Http\Resources\ParentsResource;
use Illuminate\Support\Facades\Redirect;
use App\Mail\InvoiceMail;
class EmailController extends Controller
{

    public function index()
    {
        $emails = Email::paginate(10);
    
        return Inertia::render('Email/index', [
            'emails' =>  EmailsResource::collection($emails),

        ]);
    }

    public function create()
    {
        $parents = Parents::get();
        return Inertia::render('Email/create',[
            'parents' =>  ParentsResource::collection($parents),
        ]);
    }
    public function store(Request $request)
    {
        // $parents->notify(new InvoiceMail($request));
        $emailformation = Email::create([
            'subject' => $request->subject,
            'content' => $request->content,
            'parent_id' => $request->parent_id,
    
        ]);
        Mail::to($emailformation->parent->email)->send(new InvoiceMail($emailformation));
        return Redirect::route('email.index')->with('success', 'Email created.');
    }

    public function allParentStore(Request $request)
    {

        $parents = Parents::get();
        foreach ($parents as $key => $parent) {
            Mail::to($parent->email)->send(new InvoiceMail($parent));
            $emailformation = Email::create([
                'subject' => "a",
                'content' => "ww",
                'parent_id' => $parent->parent_id,
        
            ]);
        }
        // $parents->notify(new InvoiceMail($request));

        return Redirect::route('email.index')->with('success', 'Email created.');
    }

}
