const {
  NewCustomerDiscount,
  PremiumCustomerDiscount,
  VIPCustomerDiscount,
  EliteCustomerDiscount,
  ClearanceSaleDiscount,
} = require("./discountStrategy");

class DiscountContext {
  constructor() {
    this.discountStrategy = null; // Initially set to null
  }

  // Set discount dynamically based on totalAmount
  setDiscount(totalAmount) {
    if (totalAmount > 1000 && totalAmount <= 2000) {
      this.discountStrategy = new EliteCustomerDiscount();
    } else if (totalAmount > 500 && totalAmount <= 1000) {
      this.discountStrategy = new VIPCustomerDiscount();
    } else if (totalAmount > 100 && totalAmount <= 500) {
      this.discountStrategy = new PremiumCustomerDiscount();
    } else {
      this.discountStrategy = new NewCustomerDiscount();
    }
  }

  // Method to apply Clearance Sale discount
  applyClearanceSaleDiscount() {
    this.discountStrategy = new ClearanceSaleDiscount(this.discountStrategy);
  }

  // Method to calculate final discount amount
  calculateFinalAmount(totalAmount, isClearanceSale = false) {
    this.setDiscount(totalAmount);

    // Apply clearance sale if specified
    if (isClearanceSale) {
      this.applyClearanceSaleDiscount();
    }

    // Calculate discount
    const finalAmount = this.discountStrategy.calculateDiscount(totalAmount);
    console.log(`Final bill after discount: ${finalAmount} $`);
    return finalAmount;
  }
}

module.exports = DiscountContext;
