"use strict";

var RpiLeds = require('../');
var leds;

describe('rpiLeds', function() {
  beforeEach(function() {
    // Use debug flag to only show command, and
    // not run it
    leds = new RpiLeds({
      debug: true
    });
  });

  it('runs initialisation', function() {
    // expect(leds).toContain('echo gpio | sudo tee /sys/class/leds/led0/trigger');
    // expect(leds).toContain('echo gpio | sudo tee /sys/class/leds/led1/trigger');
  });

  describe('.power', function() {
    it('exists', function() {
      expect(leds.power).toBeTruthy();
    });

    describe('.turnOn()', function() {
      it('returns set brightness command', function() {
        expect(leds.power.turnOn()).toEqual('echo 1 | sudo tee /sys/class/leds/led1/brightness');
      });

    });
  });
});