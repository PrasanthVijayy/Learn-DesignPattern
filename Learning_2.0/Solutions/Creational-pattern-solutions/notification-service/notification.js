// Notification interface

// Abstract Class
class Notifications {
  constructor(config) {
    this.config = config || {};
  }

  send(message) {
    throw new Error("Method 'send()' must be overridden");
  }
}

// Concrete Classes
class EmailNotification extends Notifications {
  send(message) {
    console.log(`Sending email notification: ${message}`);
  }
}

class SMSNotification extends Notifications {
  send(message) {
    console.log(`Sending SMS notification: ${message}`);
  }
}

class PushNotification extends Notifications {
  send(message) {
    console.log(`Sending push notification: ${message}`);
  }
}

class SocialMedia extends Notifications {
  send(message) {
    console.log(`Sending social media notification: ${message}`);
  }
}


module.exports = {
  EmailNotification,
  SMSNotification,
  PushNotification,
  SocialMedia
}