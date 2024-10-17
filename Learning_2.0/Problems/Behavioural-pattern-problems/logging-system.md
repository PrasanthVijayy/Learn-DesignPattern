# Chain of Responsibility Pattern: Logging System

## Overview

This project implements a **Logging System** using the **Chain of Responsibility Pattern**. The system allows log messages to be processed dynamically by different log handlers based on the severity level of the logs (e.g., Info, Warning, Error). Each handler can either log the message, pass it to the next handler, or perform a specific action based on the log type.

## Features

- **Multi-Level Logging**: Supports different levels of logging (Info, Warning, Error) with appropriate handlers for each level.
- **Dynamic Log Handling**: Each log handler can decide whether to process the log message or escalate it to the next handler based on its severity.
- **Customizable Log Flow**: The logging flow can be easily modified by adding or removing log handlers from the chain.
- **Flexible Output**: Log messages can be output to different destinations (console, file, external service) depending on the handler configuration.

## Internal Structure

1. **Handler (LogHandler)**

   - Defines the interface for processing log messages.
   - Contains a reference to the next handler in the chain.

2. **Concrete Handlers (ConsoleLogger, FileLogger, ErrorLogger)**

   - Implements logging logic for different severity levels:
     - **ConsoleLogger**: Handles Info logs and prints them to the console.
     - **FileLogger**: Handles Warning logs and writes them to a log file.
     - **ErrorLogger**: Handles Error logs and sends them to an external monitoring service.

3. **LogMessage (Log)**

   - Represents a log message with details such as severity level, timestamp, and message content.

4. **Client Code**
   - Creates a chain of log handlers and submits log messages for processing.

## How to Use

1. **Create Log Handlers**: Initialize different log handlers and set their responsibilities in the chain.
2. **Create Log Messages**: Instantiate log messages with appropriate severity levels.
3. **Process Log Messages**: Pass the log messages to the first handler in the chain for processing.
4. **View Logs**: Check the output destinations (console, file, monitoring service) for logged messages.

## Solution

You can find the solution to this problem in the [solution folder](/Learning_2.0/Solutions/Behavioural-pattern-solutions/logging-system/).
