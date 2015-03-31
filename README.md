# rpi-leds [![Circle CI](https://circleci.com/gh/taktran/rpi-leds.svg?style=svg)](https://circleci.com/gh/taktran/rpi-leds)

Node.js library to control Raspberry Pi onboard LEDs

## Development

Install pre-requisites

    npm install -g gulp
    npm install

## Testing

Uses [jasmine](pivotal.github.com/jasmine/).

Jasmine is run automatically when `gulp` is called.

For continuous integration, run

    gulp test

    # Or,

    npm test
