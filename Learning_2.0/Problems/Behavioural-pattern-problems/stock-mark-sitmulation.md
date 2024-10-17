# Observer Pattern: Stock Market Simulation

## Overview

This project implements the Observer Pattern through a stock market simulation where various investors observe stock prices. When the stock prices change, all registered investors are notified automatically. The simulation allows investors to add or remove themselves from the observer list and displays updated prices in real-time.

## Features

- **Stock Price Updates**: Investors are notified whenever the stock prices change.
- **Add/Remove Investors**: Investors can register or unregister to observe stock prices.
- **Real-time Display**: Updated stock prices are displayed immediately to all registered investors.

## Internal Structure

The project is organized into the following components:

1. **Subject (StockMarket)**
   - Responsible for maintaining a list of observers (investors).
   - Provides methods to register, unregister, and notify observers when stock prices change.

2. **Observer (Investor)**
   - Defines the interface for observers that want to be notified of changes in the subject.
   - Implements the update method to receive stock price updates.

3. **ConcreteSubject (ConcreteStockMarket)**
   - Implements the Subject interface and holds the state (stock prices).
   - Triggers notifications to observers when stock prices change.

4. **ConcreteObserver (ConcreteInvestor)**
   - Implements the Observer interface.
   - Receives notifications about stock price updates and updates its display accordingly.

## How to Use

1. **Initialize the Stock Market**: Create an instance of the stock market.
2. **Add Investors**: Register investor instances to observe stock price changes.
3. **Update Stock Prices**: Change stock prices, which will trigger notifications to all registered investors.
4. **Remove Investors**: Unregister investors who no longer wish to observe stock prices.

## Solution

You can find the solution to this problem in the [solution folder](/Learning_2.0/Solutions/Behavioural-pattern-solutions/stock-market-sitmulation/).
