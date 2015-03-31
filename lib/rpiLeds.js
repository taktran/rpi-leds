"use strict";

var exec = require('sync-exec');
var _ = require('lodash');

var COMMANDS = {
  init: 'echo gpio | sudo tee /sys/class/leds/<%= led %>/trigger',
  turnOn: 'echo 1 | sudo tee /sys/class/leds/<%= led %>/brightness',
  turnOff: 'echo 0 | sudo tee /sys/class/leds/<%= led %>/brightness',
  heartbeat: 'echo heartbeat | sudo tee /sys/class/leds/<%= led %>/trigger'
};

/**
 * Generate command
 * @param {String} led Led name. `power` or `status`
 * @param {String} cmdName Command name. See `COMMANDS`
 * @return {String} Command string
 */
var generateCommand = function(led, cmdName) {
  var ledName;
  if (led === 'power') {
    ledName = 'led1';
  } else if (led === 'status') {
    ledName = 'led0';
  } else {
    throw('Invalid led:', led);
  }

  var command = COMMANDS[cmdName];
  var output = _.template(command)({
    led: ledName
  });

  return output;
};

var leds = function() {
  exec(generateCommand('power', 'init'));
  exec(generateCommand('status', 'init'));
};

leds.prototype.power = {
  turnOn: function() {
    exec(generateCommand('power', 'turnOn'));
  },
  turnOff: function() {
    exec(generateCommand('power', 'turnOff'));
  },
  heartbeat: function() {
    exec(generateCommand('power', 'heartbeat'));
  }
};

leds.prototype.status = {
  turnOn: function() {
    exec(generateCommand('status', 'turnOn'));
  },
  turnOff: function() {
    exec(generateCommand('status', 'turnOff'));
  },
  heartbeat: function() {
    exec(generateCommand('status', 'heartbeat'));
  }
};

module.exports = leds;