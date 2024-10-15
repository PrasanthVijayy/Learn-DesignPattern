const { Thermostat } = require("./receiver");
const thermostat = new Thermostat(); // Make sure to have a single thermostat instance

// Command interface
class Command {
  execute() {
    throw new Error("execute() is not implemented!");
  }

  undo() {
    throw new Error("undo() is not implemented!");
  }
}

class LightOnCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }

  undo() {
    this.light.turnOff();
  }
}

class LightOffCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOff();
  }

  undo() {
    this.light.turnOn();
  }
}

class FanOnCommand extends Command {
  constructor(fan) {
    super();
    this.fan = fan;
  }

  execute() {
    this.fan.turnOn();
  }

  undo() {
    this.fan.turnOff();
  }
}

class FanOffCommand extends Command {
  constructor(fan) {
    super();
    this.fan = fan;
  }

  execute() {
    this.fan.turnOff();
  }

  undo() {
    this.fan.turnOn();
  }
}

class ThermostatSetCommand extends Command {
  constructor(thermostat, temperature) {
    super();
    this.thermostat = thermostat;
    this.temperature = temperature;
    this.previousTemperature = thermostat.getTemperature(); // Store previous temperature in the constructor
  }

  execute() {
    this.previousTemperature = this.thermostat.getTemperature(); // Save the current temperature before setting a new one
    this.thermostat.setTemperature(this.temperature);
  }

  undo() {
    this.thermostat.setTemperature(this.previousTemperature); // Restore the previous temperature
  }
}

module.exports = {
  LightOnCommand,
  LightOffCommand,
  FanOnCommand,
  FanOffCommand,
  ThermostatSetCommand,
};
