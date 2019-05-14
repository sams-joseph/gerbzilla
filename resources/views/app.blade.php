<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet">
    <link rel="stylesheet" href="/css/app.css">

    <style>
        .dots {
        width: 3em;
        height: 3em;
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        align-items: center;
        }

        .dots > div {
        width: 0.5em;
        height: 0.5em;
        background-color: #ff0f00;
        border-radius: 50%;
        animation: fade 1.5s alternate ease-in-out infinite;
        }

        .dots > div:nth-of-type(2),
        .dots > div:nth-of-type(4) {
        animation-delay: 0.25s;
        }

        .dots > div:nth-of-type(3),
        .dots > div:nth-of-type(5),
        .dots > div:nth-of-type(7) {
        animation-delay: 0.5s;
        }

        .dots > div:nth-of-type(6),
        .dots > div:nth-of-type(8) {
        animation-delay: 0.75s;
        }

        .dots > div:nth-of-type(9) {
        animation-delay: 1s;
        }

        .initial_load {
            height: 100vh;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        @keyframes fade {
        to {
            opacity: 0.2;
        }
        }
    </style>
</head>

<body class="font-sans">
    <div id="app">
        <router-view>
            <div class="initial_load">
                <div class="dots">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </router-view>
    </div>

    <script src="/js/app.js"></script>
</body>

</html>