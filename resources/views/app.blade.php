<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Gerbzilla Powerlifting</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet">
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