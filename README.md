<p align="center"><a href="https://postcard.ulanelectronics.pl" target="_blank"><img src="http://ulanelectronics.pl/wp-content/uploads/2021/09/postcard.png" width="200"></a></p>

<p align="center">
<a href="https://github.com/on3n3o/postcard/actions/workflows/laravel.yml"><img src="https://github.com/on3n3o/postcard/actions/workflows/postcard.yml/badge.svg" alt="Build Status"></a>
<img src="https://img.shields.io/packagist/l/laravel/framework" alt="License">
</p>

## About Postcard

Postcard is a frontend email web client based on Laravel and React. It provides service like Roundcube or Rainloop, with graphics similar to Google web mail client Gmail.

## Setup

This setup requires to have installed docker and docker-compose and added docker user to sudoers group.


```
# clone repository and enter the directory
git clone https://github.com/on3n3o/postcard.git
cd postcard

# install composer dependencies
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/opt \
    -w /opt \
    laravelsail/php80-composer:latest \
    composer install --ignore-platform-reqs

cp .env.example .env

# run the application
sail up

# run this ONLY ONE TIME to generate security keys
sail artisan key:generate

# run this ONLY if you are setting up a demo project
sail artisan migrate
```

## Contributing

Thank you for considering contributing to the Postcard! The contribution guide can be found in the [Postcard documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Postcard community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Postcard, please send an e-mail to Marcin Maciejewski via [marcin.maciejewski@ulanelectronics.pl](mailto:marcin.maciejewski@ulanelectronics.pl). All security vulnerabilities will be promptly addressed.

## License

The Postcard is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

Some other licences may be disclosed in webclient itself, like fonts or svgs.