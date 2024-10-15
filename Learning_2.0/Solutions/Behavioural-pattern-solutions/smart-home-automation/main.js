const {Light, Fan, Thermostat} = require("./receiver");
const {
  LightOnCommand,
  LightOffCommand,
  FanOnCommand,
  FanOffCommand,
  ThermostatSetCommand,
} = require("./command");

const CommandInvoker = require("./invoker");

// Initialise instances
const invoker = new CommandInvoker();
const light = new Light();
const fan = new Fan();
const thermostat = new Thermostat();

// Create commands
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);
const fanOn = new FanOnCommand(fan);
const fanOff = new FanOffCommand(fan);
const thermostatStat = new ThermostatSetCommand(thermostat, 22);

// Queue commands
invoker.enqueue(lightOn);
invoker.enqueue(fanOn);
invoker.enqueue(lightOff);
invoker.enqueue(fanOff);
invoker.enqueue(thermostatStat);

// Execute commands;
invoker.executeCommands();

// Undo last command
invoker.undoLastCommand();


invoker.enqueue(lightOn);