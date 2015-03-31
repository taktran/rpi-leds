"use strict";

var exec = require('sync-exec');

var COMMANDS = {
  power: {
    init: 'echo gpio | sudo tee /sys/class/leds/led1/trigger',
    turnOn: 'echo 1 | sudo tee /sys/class/leds/led1/brightness',
    turnOff: 'echo 0 | sudo tee /sys/class/leds/led1/brightness',
    heartbeat: 'echo heartbeat | sudo tee /sys/class/leds/led1/trigger'
  },
  status: {
    init: 'echo gpio | sudo tee /sys/class/leds/led0/trigger',
    turnOn: 'echo 1 | sudo tee /sys/class/leds/led0/brightness',
    turnOff: 'echo 0 | sudo tee /sys/class/leds/led0/brightness',
    heartbeat: 'echo heartbeat | sudo tee /sys/class/leds/led0/trigger'
  }
};

var leds = function() {
  exec(COMMANDS.power.init);
  exec(COMMANDS.status.init);
};

leds.prototype.power = {
  turnOn: function() {
    exec(COMMANDS.power.turnOn);
  },
  turnOff: function() {
    exec(COMMANDS.power.turnOff);
  },
  heartbeat: function() {
    exec(COMMANDS.power.heartbeat);
  }
};

leds.prototype.status = {
  turnOn: function() {
    exec(COMMANDS.status.turnOn);
  },
  turnOff: function() {
    exec(COMMANDS.status.turnOff);
  },
  heartbeat: function() {
    exec(COMMANDS.status.heartbeat);
  }
};

module.exports = leds;