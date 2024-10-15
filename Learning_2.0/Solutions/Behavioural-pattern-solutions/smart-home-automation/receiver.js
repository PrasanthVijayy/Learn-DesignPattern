// Light receiver
class Light {
  turnOn() {
    console.log("The light is on");
  }

  turnOff() {
    console.log("The light is off");
  }
}

// Fan receiver
class Fan {
  turnOn() {
    console.log("The fan is on");
  }

  turnOff() {
    console.log("The fan is off");
  }
}

// Thermostat receiver
class Thermostat {
  constructor() {
    this.currentTemperature = 20; // Store as number for easier manipulation
  }

  setTemperature(temp) {
    this.currentTemperature = temp; // Update the current temperature
    console.log(`The temperature is set to ${temp}℃`);
  }

  getTemperature() {
    return this.currentTemperature; // Return the current temperature
  }
}

module.exports = { Light, Fan, Thermostat };
