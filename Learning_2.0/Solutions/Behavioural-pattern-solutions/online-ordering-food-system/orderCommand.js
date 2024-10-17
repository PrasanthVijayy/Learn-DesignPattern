class OrderCommand {
  execute() {
    throw new Error("execute() is not implemented");
  }

  undo() {
    throw new Error("undo() is not implemented");
  }
}

// Concrete class
class AddItemCommand extends OrderCommand {
  constructor(order, item) {
    super();
    this.order = order;
    this.item = item;
  }

  execute() {
    this.order.addItem(this.item);
  }

  undo() {
    this.order.removeItem(this.item);
  }
}

class RemoveItemCommand extends OrderCommand {
  constructor(order, item) {
    super();
    this.order = order;
    this.item = item;
  }

  execute() {
    this.order.removeItem(this.item);
  }

  undo() {
    this.order.addItem(this.item);
  }
}

class ProcessOrderCommand extends OrderCommand {
  constructor(order) {
    super();
    this.order = order;
  }

  execute() {
    this.order.processOrder();
  }

  undo() {
    console.log("Cannot undo after order is processed.");
  }
}

class CancelOrderCommand extends OrderCommand {
  constructor(order) {
    super();
    this.order = order;
  }

  execute() {
    this.order.cancelOrder();
  }

  undo() {
    console.log("Cannot undo after order is cancelled.");
  }
}

module.exports = {
  AddItemCommand,
  RemoveItemCommand,
  ProcessOrderCommand,
  CancelOrderCommand,
};
