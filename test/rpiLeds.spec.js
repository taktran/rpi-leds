"use strict";

var proxyquire = require('proxyquire');
var sinon = require('sinon');

var leds, execStub;

describe('rpiLeds', function() {
  beforeEach(function() {
    // Stub, so commands aren't executed
    execStub = sinon.spy();
    var RpiLeds = proxyquire('../lib/rpiLeds', {
      'sync-exec': execStub
    });

    leds = new RpiLeds();
  });

  it('runs initialisation with led0', function() {
    expect(execStub.calledWithMatch('echo gpio | sudo tee /sys/class/leds/led0/trigger')).toBeTruthy();
  });

  it('runs initialisation with led1', function() {
    expect(execStub.calledWithMatch('echo gpio | sudo tee /sys/class/leds/led1/trigger')).toBeTruthy();
  });

  describe('reset', function() {
    beforeEach(function() {
      leds.reset();
    });

    it('resets both LEDs', function() {
      expect(execStub.calledWithMatch('echo input | sudo tee /sys/class/leds/led1/trigger')).toBeTruthy();
      expect(execStub.calledWithMatch('echo mmc0 | sudo tee /sys/class/leds/led0/trigger')).toBeTruthy();
    });
  });

  describe('power', function() {
    it('exists', function() {
      expect(leds.power).toBeTruthy();
    });

    describe('turnOn()', function() {
      beforeEach(function() {
        leds.power.turnOn();
      });

      it('sets brightness command', function() {
        expect(execStub.calledWithMatch('echo 1 | sudo tee /sys/class/leds/led1/brightness')).toBeTruthy();
      });
    });

    describe('.turnOff()', function() {
      beforeEach(function() {
        leds.power.turnOff();
      });

      it('sets brightness command', function() {
        expect(execStub.calledWithMatch('echo 0 | sudo tee /sys/class/leds/led1/brightness')).toBeTruthy();
      });
    });

    describe('.heartbeat()', function() {
      beforeEach(function() {
        leds.power.heartbeat();
      });

      it('sets trigger', function() {
        expect(execStub.calledWithMatch('echo heartbeat | sudo tee /sys/class/leds/led1/trigger')).toBeTruthy();
      });
    });

    describe('.blink()', function() {
      beforeEach(function() {
        leds.power.blink();
      });

      it('sets trigger', function() {
        expect(execStub.calledWithMatch('echo timer | sudo tee /sys/class/leds/led1/trigger')).toBeTruthy();
      });
    });

    describe('.reset()', function() {
      beforeEach(function() {
        leds.power.reset();
      });

      it('sets trigger to `input`', function() {
        expect(execStub.calledWithMatch('echo input | sudo tee /sys/class/leds/led1/trigger')).toBeTruthy();
      });
    });
  });

  describe('status', function() {
    it('exists', function() {
      expect(leds.status).toBeTruthy();
    });

    describe('turnOn()', function() {
      beforeEach(function() {
        leds.status.turnOn();
      });

      it('sets brightness command', function() {
        expect(execStub.calledWithMatch('echo 1 | sudo tee /sys/class/leds/led0/brightness')).toBeTruthy();
      });
    });

    describe('.turnOff()', function() {
      beforeEach(function() {
        leds.status.turnOff();
      });

      it('sets brightness command', function() {
        expect(execStub.calledWithMatch('echo 0 | sudo tee /sys/class/leds/led0/brightness')).toBeTruthy();
      });
    });

    describe('.heartbeat()', function() {
      beforeEach(function() {
        leds.status.heartbeat();
      });

      it('sets trigger', function() {
        expect(execStub.calledWithMatch('echo heartbeat | sudo tee /sys/class/leds/led0/trigger')).toBeTruthy();
      });
    });

    describe('.blink()', function() {
      beforeEach(function() {
        leds.status.blink();
      });

      it('sets trigger', function() {
        expect(execStub.calledWithMatch('echo timer | sudo tee /sys/class/leds/led0/trigger')).toBeTruthy();
      });
    });

    describe('.reset()', function() {
      beforeEach(function() {
        leds.status.reset();
      });

      it('sets trigger to `mmc0`', function() {
        expect(execStub.calledWithMatch('echo mmc0 | sudo tee /sys/class/leds/led0/trigger')).toBeTruthy();
      });
    });
  });
});