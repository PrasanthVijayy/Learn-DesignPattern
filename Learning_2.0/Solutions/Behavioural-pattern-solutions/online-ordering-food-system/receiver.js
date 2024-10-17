class Order {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
      console.log(`Removed ${item} from the order.`);
    } else {
      console.log(`${item} is not in the order.`);
    }
  }

  processOrder() {
    if (this.items.length > 0) {
      console.log(`Order processed: ${this.items.join(", ")}`);
      this.items = [];
    } else {
      console.log("Add products to the order before processing it.");
    }
  }

  cancelOrder() {
    console.log("Order cancelled.");
    this.items = [];
  }

  showItems() {
    console.log(
      `Items in the order: ${this.items.join(", ") || "Empty, no items found."}`
    );
  }
}

module.exports = Order;
