// commandInvoker.js

class CommandInvoker {
  constructor() {
    this.commandQueue = [];
    this.history = [];
  }

  enqueue(command) {
    this.commandQueue.push(command);
    console.log(`Command queued: ${command.constructor.name}`);
  }

  executeCommands() {
    while (this.commandQueue.length > 0) {
      const command = this.commandQueue.shift();
      command.execute();
      this.history.push(command);
    }
  }

  undoLastCommand() {
    if (this.history.length > 0) {
      const lastCommand = this.history.pop();
      lastCommand.undo();
      console.log(`Undoing ${lastCommand.constructor.name}`);
    } else {
      console.log("Nothing to undo");
    }
  }
}

module.exports = CommandInvoker;
