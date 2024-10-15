// Notification Factory

const {
  EmailNotification,
  SMSNotification,
  PushNotification,
  SocialMedia,
} = require("./notification");

class NotificationFactory {
  // Creating static to call the method without creating an instance
    static createNotification(type, config) { 
    switch (type) {
      case "email":
        return new EmailNotification(config);
      case "sms":
        return new SMSNotification(config);
      case "push":
        return new PushNotification(config);
      case "socialMedia":
        return new SocialMedia(config);
      default:
        throw new Error(`Unsupported notification type: ${type}`);
    }
  }
}

module.exports = NotificationFactory;