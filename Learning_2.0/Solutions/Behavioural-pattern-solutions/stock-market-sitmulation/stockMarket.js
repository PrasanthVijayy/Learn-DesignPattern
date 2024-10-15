class StockMarket {
  constructor() {
    this.investor = [];
    this.stockPrices = [];
  }

  // Method to register an investor
  register(investor) {
    this.investor.push(investor);
  }

  // Method to unregister an investor
  unregister(investor) {
    this.investor = this.investor.filter((inv) => inv !== investor);
  }

  // Method to notify all investors
  notify() {
    this.investor.forEach((inv) => inv.update(this.stockPrices));
  }

  // Method to update stock prices
  updateStockPrice(stockName, price) {
    this.stockPrices[stockName] = price;
    this.notify();
  }
}

// Concrete Class for stock market
class ConcreteStockMarket extends StockMarket {
  getStockPrices() {
    return this.stockPrices;
  }
}

module.exports = { ConcreteStockMarket };
