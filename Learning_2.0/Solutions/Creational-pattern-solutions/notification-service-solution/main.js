// main.js
const NotificationFactory = require("./notificationFactory");
const NotificationQueue = require("./notificationQueue");

function notifyUser(type, message, config = {}) {
  try {
    const notification = NotificationFactory.createNotification(type, config);
    notification.message = message;
    notification.type = type;
    return notification; // Return the notification object for queuing
  } catch (error) {
    console.error(error.message);
  }
}

// Example usage
const notificationQueue = new NotificationQueue();

// Queue notifications
notificationQueue.enqueue(
  notifyUser("email", "Welcome to our service!", { type: "email" })
);
notificationQueue.enqueue(
  notifyUser("sms", "Your verification code is 123456", { type: "sms" })
);
notificationQueue.enqueue(
  notifyUser("push", "You have a new message!", { type: "push" })
);

// Process the notification queue
notificationQueue.processQueue();
