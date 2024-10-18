class Platform {
  sendNotification(message) {
    throw new Error("Method 'sendNotification()' must be implemented");
  }
}

// Concrete class

class AndroidPlatform extends Platform {
  sendNotification(message) {
    console.log(`Sending notification to Android: ${message}`);
  }
}

class IOSPlatform extends Platform {
  sendNotification(message) {
    console.log(`Sending push notification to iOS: ${message}`);
  }
}

class EmailPlatform extends Platform {
  sendNotification(message) {
    console.log(`Sending email notification: ${message}`);
  }
}

class SocialMediaPlatform extends Platform {
  sendNotification(message) {
    console.log(`Sending Social Media notification: ${message}`);
  }
}

module.exports = {
  AndroidPlatform,
  IOSPlatform,
  EmailPlatform,
  SocialMediaPlatform,
};
