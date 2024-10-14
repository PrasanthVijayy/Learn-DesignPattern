const {ConcreteStockMarket} = require('./stockMarket');
const {RetailInvestor} = require('./investor');

const stockMarket = new ConcreteStockMarket();
const investor1 = new RetailInvestor('Alice');
const investor2 = new RetailInvestor('Bob');

stockMarket.register(investor1);
stockMarket.register(investor2);

// Display current investor status
investor1.display();
investor2.display();

stockMarket.updateStockPrice('AAPL', 150);
stockMarket.updateStockPrice('GOOGL', 2800);

// Unregister an investor
stockMarket.unregister(investor1);

// Update stock prices again
stockMarket.updateStockPrice('AAPL', 155);
