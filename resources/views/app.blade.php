<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />

    <script src="{{ mix('/js/app.js') }}" defer></script>

    @inertiaHead
  </head>
  <body>
    <main class="  text-gray-900 bg-purple-100 ">
      @routes
    @inertia
     
    </main>
  </body>
</html>