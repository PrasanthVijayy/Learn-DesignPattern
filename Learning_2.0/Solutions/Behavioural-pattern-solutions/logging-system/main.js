// main.js
const { Log, ConsoleLogger, FileLogger, ErrorLogger } = require("./log");

// Create the chain of log handlers
const errorLogger = new ErrorLogger();
const fileLogger = new FileLogger(errorLogger);
const consoleLogger = new ConsoleLogger(fileLogger);

// Create log messages
const infoLog = new Log("Info", "This is an info message.");
const warningLog = new Log("Warning", "This is a warning message.");
const errorLog = new Log("Error", "This is an error message.");

// Process log messages
consoleLogger.handle(infoLog); // Console Logger handles it
consoleLogger.handle(warningLog); // File Logger handles it
consoleLogger.handle(errorLog); // Error Logger handles it
