// Client code

const {EmailPlatform, IOSPlatform, AndroidPlatform, SocialMediaPlatform} = require("./platform");
const {AlertNotification, PromotionNotification, RemainderNotification} = require("./notificaton");

// Initialize platforms
const emailPlatform = new EmailPlatform();
const iosPlatform = new IOSPlatform();
const androidPlatform = new AndroidPlatform();
const socialMediaPlatform = new SocialMediaPlatform();

// Create notifications
const alertNotification = new AlertNotification(emailPlatform);
const promotionNotification1 = new PromotionNotification(socialMediaPlatform);
const remainderNotification = new RemainderNotification(iosPlatform);
const promotionNotification2 = new PromotionNotification(androidPlatform);

// Send notifications
alertNotification.send("Alert message");
promotionNotification1.send("Promotion message 1");
remainderNotification.send("Remainder message");
promotionNotification2.send("Promotion message 2");

alertNotification.platform = iosPlatform;
alertNotification.send("Alert message 2");