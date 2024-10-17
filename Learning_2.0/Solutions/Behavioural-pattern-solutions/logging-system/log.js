const fs = require("fs");

// Abstract log class
class Log {
  constructor(level, message) {
    this.level = level;
    this.message = message;
    this.timestamp = new Date();
  }
}

// Log handler
class LogHandler {
  constructor(nextHandler = null) {
    this.nextHandler = nextHandler; // Next handler in chain
  }

  handle(log) {
    if (this.nextHandler) {
      this.nextHandler.handle(log);
    }
  }
}

// Chains (types) of log handlers
class ConsoleLogger extends LogHandler {
  handle(log) {
    if (log.level === "info") {
      console.log(`[INFO] - ${log.timestamp} - ${log.message}`);
    } else {
      super.handle(log); // pass to the next hanaler
    }
  }
}

class FileLogger extends LogHandler {
  handle(log) {
    if (log.level === "Warning") {
      const logMessage = `[WARNING] - ${log.timestamp} - ${log.message} \n`;
      fs.appendFile("warnings.log", logMessage, (err) => {
        if (err) {
          console.log("Failed to write to file", err);
        }
      });
    } else {
      super.handle(log); // pass to the next hanaler
    }
  }
}

class ErrorLogger extends LogHandler {
  handle(log) {
    if (log.level === "Error") {
      console.error(`[ERROR] ${log.timestamp}: ${log.message}`); // error console log
    } else {
      super.handle(log); // Pass to the next handler
    }
  }
}

module.exports = {
  Log,
  ConsoleLogger,
  FileLogger,
  ErrorLogger,
};
