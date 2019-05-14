# Gerbzilla Powerlifting App

Landing page and application to allow users to track workouts and progress. Trainers can create workouts for their users based off of their specific needs. Users can view their workouts, progress, and goals all from a convenient dashboard.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

-   Laravel 5.8^
-   PHP 7.2^
-   MySQL
-   composer
-   NodeJS
-   NPM/Yarn

Example Installing Laravel

```
composer global require laravel/installer
```

### Installing

Install composer libraries

```
composer install
```

Install NPM Packages

```
npm install
```

Fill in environment variables using the example as a guide.

```
php artisan migrate
```

Install Passport

```
php artisan passport:install
```

Add the password client to the environment variables file.

Run the backend

```
php artisan serve
```

Run the front end in watch mode

```
npm run watch
```

Visit localhost:8000 for a demo.
