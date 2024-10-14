class Investor {
  update(stockPrices) {
    throw new Error("This method must be overridden!");
  }
}

// Concrete Class for investor

class RetailInvestor extends Investor {
  constructor(name) {
    super();
    this.name = name;
  }

  update(stockPrices) {
    console.log(
      `Investor ${this.name} has the latest stock prices:`,
      stockPrices
    );
  }

  display() {
    console.log(`Investor ${this.name} is currently viewing the stock market.`);
  }
}
module.exports = { RetailInvestor };
