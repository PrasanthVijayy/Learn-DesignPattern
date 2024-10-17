const Order = require("./receiver");
const OrderManager = require("./ManagerInvoker");
const {
  AddItemCommand,
  RemoveItemCommand,
  ProcessOrderCommand,
  CancelOrderCommand,
} = require("./orderCommand");

// Client code
const myOrder = new Order();
const orderManager = new OrderManager();

// Add items
const addItem1 = new AddItemCommand(myOrder, "Burger");
const addItem2 = new AddItemCommand(myOrder, "Fries");

orderManager.executeCommand(addItem1); // Adds "Burger"
orderManager.executeCommand(addItem2); // Adds "Fries"

// Show current items
myOrder.showItems();

// Remove an item
const removeItem = new RemoveItemCommand(myOrder, "Fries");
orderManager.executeCommand(removeItem); // Removes "Fries"

// Undo remove
orderManager.undo(); // Restores "Fries"

// Show current items
myOrder.showItems();

// Process order
const processOrder = new ProcessOrderCommand(myOrder);
orderManager.executeCommand(processOrder); // Processes the order

// Cancel the order
const cancelOrder = new CancelOrderCommand(myOrder);
orderManager.executeCommand(cancelOrder); // Cancels the order
