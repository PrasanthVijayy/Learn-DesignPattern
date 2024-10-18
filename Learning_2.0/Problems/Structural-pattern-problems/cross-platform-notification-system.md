# Bridge Pattern: Cross-Platform Notification System

## Overview

This project implements a **Cross-Platform Notification System** using the **Bridge Pattern**. The system is designed to send notifications across multiple platforms (e.g., email, SMS, push notifications) while supporting different types of notifications (e.g., alerts, promotions, reminders). By decoupling the notification type from the platform, the system achieves flexibility, enabling independent evolution of both dimensions.

## Features

- **Multiple Notification Types**: The system supports different notification types such as Alerts, Promotions, and Reminders, allowing users to send tailored messages based on context.
- **Cross-Platform Flexibility**: The system can deliver notifications over various platforms, including Email, SMS, and Push Notifications.
- **Seamless Extension**: New notification types or platforms can be added without affecting existing code, enhancing maintainability and scalability.
- **Dynamic Platform Switching**: Users can dynamically change platforms at runtime, making the system adaptable to varying requirements.

## Internal Structure

The project is organized into the following components:

1. **Notification (Abstraction)**

   - The base class that defines the interface for sending notifications. It contains a reference to the platform (implementor) used for sending notifications.
   - Methods:
     - `send(message)`: Sends the message using the selected platform.

2. **Refined Abstractions (AlertNotification, PromotionNotification, ReminderNotification)**

   - Subclasses of the `Notification` abstraction, each representing a different type of notification (alert, promotion, or reminder). These classes extend the base behavior for their specific use cases.

3. **Platform (Implementor)**

   - Defines the interface for sending notifications through different platforms (email, SMS, push notifications).
   - Methods:
     - `sendNotification(message)`: Responsible for implementing the platform-specific notification logic.

4. **Concrete Platforms (EmailPlatform, SMSPlatform, PushNotificationPlatform)**

   - Implements the platform interface, sending notifications through specific channels like Email, SMS, or Push Notifications. Each platform handles the logic for sending messages through its medium.

5. **Client Code**
   - Demonstrates how to create different types of notifications and platforms. The client code allows for dynamic combinations of notifications and platforms, ensuring flexibility in how notifications are delivered.

## How to Use

1. **Initialize Platforms**: Create instances of the concrete platform classes, such as `EmailPlatform`, `SMSPlatform`, or `PushNotificationPlatform`.
2. **Create Notification Types**: Instantiate notification types like `AlertNotification`, `PromotionNotification`, or `ReminderNotification` by passing the platform as a parameter.
3. **Send Notifications**: Call the `send(message)` method on the notification object to deliver the message using the selected platform.
4. **Switch Platforms**: Dynamically switch platforms by passing a different platform to the notification object at runtime, allowing cross-platform flexibility.

## Solution

You can find the solution to this problem in the [solution folder](/Learning_2.0/Solutions/Structural-pattern-solutions/cross-platform-notification-system)
