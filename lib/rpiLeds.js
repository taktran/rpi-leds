"use strict";

var COMMANDS = {
  power: {
    init: 'echo gpio | sudo tee /sys/class/leds/led1/trigger',
    turnOn: 'echo 1 | sudo tee /sys/class/leds/led1/brightness'
  }
};

var leds = function(options) {
  this.options = options || {};

  this._debug = options._debug;
};

leds.prototype.power = {
  turnOn: function() {
    var cmd = COMMANDS.power.turnOn;

    return cmd;
  },
  turnOff: function() {

  }
};

module.exports = leds;