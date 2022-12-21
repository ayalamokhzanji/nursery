<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Email;
use Inertia\Controller;
use Illuminate\Http\Request;
use App\Notifications\InvoiceMail;
use App\Http\Resources\EmailsResource;
use Illuminate\Support\Facades\Redirect;

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
        
        return Inertia::render('Email/create');
    }
    public function store(Request $request)
    {
        $Parents->notify(new InvoiceMail($request));
        $emailformation = Email::create([
            'subject' => $request->subject,
            'content' => $request->content,
    
        ]);
        return Redirect::route('email.index')->with('success', 'Email created.');
    }

}
