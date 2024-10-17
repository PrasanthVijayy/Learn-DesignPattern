class OrderManager {
  constructor() {
    this.history = [];
    this.undoStack = [];
  }

  executeCommand(command) {
    command.execute();
    this.history.push(command);
    this.undoStack = []; // Reset the undo stack after a new command
  }

  undo() {
    const command = this.history.pop();
    if (command) {
      command.undo();
      this.undoStack.push(command);
    } else {
      console.log("No commands to undo.");
    }
  }

  redo() {
    const command = this.undoStack.pop();
    if (command) {
      command.execute();
      this.history.push(command);
    } else {
      console.log("No commands to redo.");
    }
  }
}

module.exports = OrderManager;
