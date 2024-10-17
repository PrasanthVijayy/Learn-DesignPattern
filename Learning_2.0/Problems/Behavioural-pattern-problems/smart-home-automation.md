# Command Pattern: Smart Home Automation System

## Overview

This project implements the Command Pattern to create a Smart Home Automation System that allows users to control various smart devices in their home, such as lights, fans, and thermostats. By encapsulating requests as command objects, users can issue commands to turn devices on or off, adjust brightness or temperature, and queue commands for execution, providing a flexible and user-friendly automation experience.

## Features

- **Device Control**: Users can easily control multiple smart devices (e.g., lights, fans, thermostats) within their home.
- **Command Queue**: Users can queue commands for batch execution, allowing for complex automation scenarios.
- **Undo Functionality**: Users can undo the last executed command, reverting devices to their previous states.
- **Device Status Check**: Users can check the current status of each device to monitor their home environment.

## Internal Structure

The project is organized into the following components:

1. **Command Interface**

   - Defines a common interface for all command objects, ensuring they implement the `execute` and `undo` methods.

2. **Concrete Command Classes**

   - **LightOnCommand**: Implements the Command interface to turn the light on.
   - **LightOffCommand**: Implements the Command interface to turn the light off.
   - **FanOnCommand**: Implements the Command interface to turn the fan on.
   - **FanOffCommand**: Implements the Command interface to turn the fan off.
   - **ThermostatSetCommand**: Implements the Command interface to set the thermostat to a specified temperature.

3. **Receiver Classes**

   - Represents the actual smart devices (e.g., `Light`, `Fan`, `Thermostat`) that will be controlled by the commands.

4. **Command Invoker**

   - Manages command execution, maintains a queue of commands, and handles the undo operation.

5. **Client Code**
   - Responsible for creating command objects and associating them with the appropriate receivers to facilitate device control.

## How to Use

1. **Initialize Devices**: Create instances of smart devices (lights, fans, thermostats).
2. **Create Commands**: Instantiate command objects associated with the devices to control their states.
3. **Add Commands to Invoker**: Use the command invoker to queue the commands for execution.
4. **Execute Commands**: Execute the queued commands in order, applying the desired changes to the devices.
5. **Undo Last Command**: Call the undo method to revert the last executed command.

## Solution

You can find the solution to this problem in the [solution folder](/Learning_2.0/Solutions/Behavioural-pattern-solutions/smart-home-automation/).
