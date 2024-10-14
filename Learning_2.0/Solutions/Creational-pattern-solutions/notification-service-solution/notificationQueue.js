// Notification Queue

const NotificationLogger = require("./notificationLogger");

class NotificationQueue {
  constructor() {
    this.queue = [];
    this.logger = new NotificationLogger();
  }

  enqueue(notification) {
    this.queue.push(notification);
    console.log(`Enqueued notification: ${JSON.stringify(notification)}`);
  }

  processQueue() {
    while (this.queue.length > 0) {
      const notification = this.queue.shift();
      notification.send(notification.message);
      this.logger.log(notification.type, notification.message);
    }
  }
}

module.exports = NotificationQueue;
