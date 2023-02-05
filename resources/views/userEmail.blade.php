@component('mail::message')
<h1>مرحبا {{ $emailformation->parent->main_guardian_name }}</h1>
<p>{{ $emailformation->subject }}</p>

<p>
{{ $emailformation->content }}

</p>
<hr>
مع تحياتي 
<br>
Hanan nursery
@endcomponent