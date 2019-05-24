<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Gerbzilla Powerlifting</title>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/app.css">
</head>

<body class="font-sans">
    <div id="app">
        <snackbar></snackbar>
        <router-view></router-view>
    </div>

    <script src="/js/app.js"></script>
</body>

</html>