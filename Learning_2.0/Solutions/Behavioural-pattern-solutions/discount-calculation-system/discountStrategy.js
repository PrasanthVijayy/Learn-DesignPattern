// Abstract class
class Discount {
  calculateDiscount(totalAmount) {
    throw new Error("Method 'calculateDiscount()' must be overridden!");
  }
}

// Concrete classes

// newCustomer Discount class
class NewCustomerDiscount extends Discount {
  calculateDiscount(totalAmount) {
    console.log(`New customer: No discount applied.`);
    return totalAmount;
  }
}

// Customer purchases more than $100 - $500
class PremiumCustomerDiscount extends Discount {
  calculateDiscount(totalAmount) {
    const discount = totalAmount * 0.1;
    console.log(
      "Since you purchased bill  100$ - 500$: 10% discount applied on final bill."
    );
    console.log(`Saved: ${discount} $`);
    return totalAmount - discount;
  }
}

// Customer purchases more than $500 - $1000
class VIPCustomerDiscount extends Discount {
  calculateDiscount(totalAmount) {
    const discount = totalAmount * 0.2;
    console.log(
      "Since you purchased bill  500$ - 1000$: 20% discount applied on final bill."
    );
    console.log(`Saved: ${discount} $`);
    return totalAmount - discount;
  }
}

// Customer purchases more than $1000 - $2000
class EliteCustomerDiscount extends Discount {
  calculateDiscount(totalAmount) {
    const discount = totalAmount * 0.3;
    console.log(
      "Since you purchased bill  1000$ - 2000$: 30% discount applied on final bill."
    );
    console.log(`Saved: ${discount} $`);
    return totalAmount - discount;
  }
}

// Clearance Sale
class ClearanceSaleDiscount extends Discount {
  constructor(baseStrategy) {
    super();
    this.baseStrategy = baseStrategy; // Applying the base strategy first
  }
  calculateDiscount(totalAmount) {
    let discountAmount = this.baseStrategy.calculateDiscount(totalAmount);
    const clearanceDiscount = discountAmount * 0.5; // 50% discount for clearance sale
    console.log("Clearance sale: 50% discount applied on final bill.");
    console.log(`Saved: ${clearanceDiscount} $`);
    return discountAmount - clearanceDiscount;
  }
}

module.exports = {
  NewCustomerDiscount,
  PremiumCustomerDiscount,
  VIPCustomerDiscount,
  EliteCustomerDiscount,
  ClearanceSaleDiscount,
};
