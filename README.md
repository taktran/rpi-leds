# rpi-leds [![Circle CI](https://circleci.com/gh/taktran/rpi-leds.svg?style=svg)](https://circleci.com/gh/taktran/rpi-leds)

Node.js library to control Raspberry Pi onboard LEDs.

Currently only tested on the Raspberry Pi 2.

## Usage

Install it

    npm install rpi-leds

Include it

    var RpiLeds = require('rpi-leds');
    var leds = new RpiLeds();

### Commands

Power LED (PWR/red) is referenced with `.power`.

Status LED (ACT/green) is referenced with `.status`.

Turn on LEDs

    leds.power.turnOn();
    leds.status.turnOn();

Turn off LEDs

    leds.power.turnOff();
    leds.status.turnOff();

Activate LED heartbeats

    leds.power.heartbeat();
    leds.status.heartbeat();

Activate LED blinking

    leds.power.blink();
    leds.status.blink();

Reset LEDs to original settings

    leds.power.reset();  // Set trigger to `input`
    leds.status.reset(); // Set trigger to `mmc0`

    leds.reset();        // Resets both LEDs

## Development

Install pre-requisites

    npm install -g gulp
    npm install

For development, run

    gulp

## Testing

Uses [jasmine](https://jasmine.github.io/).

Jasmine is run automatically when `gulp` is called.

For continuous integration, run

    gulp test

    # Or,

    npm test

## Resources

This project is based off code from:

* http://raspberrypi.stackexchange.com/questions/697/how-do-i-control-the-system-leds-using-my-software
* http://www.raspberrypi.org/forums/viewtopic.php?f=28&t=99445

## License

MIT
