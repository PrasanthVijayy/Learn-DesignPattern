class notification {
  constructor(platform) {
    this.platform = platform;
  }

  send(message) {
    throw new Error("Method 'send()' must be overridden");
  }
}

class AlertNotification extends notification {
  send(message) {
    this.platform.sendNotification(`ALERT!: ${message}`);
  }
}

class PromotionNotification extends notification {
  send(message) {
    this.platform.sendNotification(`PROMOTION!: ${message}`);
  }
}

class RemainderNotification extends notification {
  send(message) {
    this.platform.sendNotification(`REMAINDER!: ${message}`);
  }
}

module.exports = {
  AlertNotification,
  PromotionNotification,
  RemainderNotification,
};
