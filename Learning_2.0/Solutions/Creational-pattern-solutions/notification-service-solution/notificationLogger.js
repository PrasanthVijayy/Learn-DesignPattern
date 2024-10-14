// Notification logger

class NotificationLogger {
  constructor() {
    this.logs = [];
  }

  log(notificationType, message) {
    const timestamp = new Date().toISOString();
    this.logs.push({ timestamp, notificationType, message });
    console.log(`${timestamp} - ${notificationType} - ${message}`);
  }

  getlogs() {
    return this.logs;
  }
}

module.exports = NotificationLogger;
