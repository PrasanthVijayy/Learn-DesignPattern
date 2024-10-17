# Command Pattern: Online Food Ordering System

## Overview

This project implements an **Online Food Ordering System** using the **Command Pattern**. The system encapsulates user requests such as adding, removing, processing, and canceling orders as commands, allowing for easy modification, undo, and redo operations. The system is flexible and scalable, enabling new actions to be added seamlessly without altering the core logic.

## Features

- **Command-based Order Management**: Encapsulates actions such as adding items, removing items, processing the order, and canceling it.
- **Undo/Redo Functionality**: Users can undo or redo their actions, providing flexibility during the order process.
- **Dynamic Command Execution**: Supports dynamic execution and modification of commands without affecting the system's core.
- **Extensible System**: Easily extendable to accommodate new commands for managing orders.

## Internal Structure

1. **Command Interface (OrderCommand)**

   - Provides a unified interface for executing, undoing, and redoing commands.

2. **Concrete Commands**

   - **AddItemCommand**: Adds an item to the current order.
   - **RemoveItemCommand**: Removes an item from the current order.
   - **ProcessOrderCommand**: Finalizes and processes the order for checkout.
   - **CancelOrderCommand**: Cancels the current order entirely.

3. **Receiver (Order)**

   - Handles the logic for managing items in the order, including adding, removing, and resetting items.

4. **Invoker (OrderManager)**

   - Manages the execution of commands and stores history to allow for undo and redo actions.

5. **Client Application**
   - Allows users to interact with the system by adding or removing items, processing orders, canceling them, or undoing/redoing recent actions.

## How to Use

1. **Create an Order**: Start by initializing a new order.
2. **Add/Remove Items**: Use commands to add or remove items from the order.
3. **Process or Cancel Orders**: Once the items are finalized, process the order for checkout or cancel it.
4. **Undo/Redo Actions**: At any point, undo or redo any previous actions to modify the order.

## Solution

You can find the solution to this problem in the [solution folder](/Learning_2.0/Solutions/Behavioural-pattern-solutions/online-ordering-food-system/).
