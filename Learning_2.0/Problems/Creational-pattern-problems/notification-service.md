# Factory Method Pattern: Enhanced Notification Service

## Overview

This project implements the Factory Method Pattern to create a flexible and robust Notification Service capable of sending notifications through various channels, including email, SMS, and push notifications. This enhanced design introduces additional features like configuration settings, logging, batch notifications, and queuing mechanisms, providing a more comprehensive solution for notification management.

## Features

- **Multiple Notification Types**: Supports sending notifications via Email, SMS, and Push notifications.
- **Dynamic Notification Creation**: Users can specify their preferred notification method, and the system will create the appropriate notification object.
- **Common Interface**: All notification types share a common interface for sending notifications, ensuring uniform implementation.
- **Configurable Notifications**: Each notification can be configured with settings like type, frequency, and priority.
- **Logging**: Tracks and logs all sent notifications for future reference.
- **Batch Notifications**: Allows for queuing notifications to be sent in a controlled manner.

## Internal Structure

The project is organized into the following components:

1. **Notification Interface**
   - Defines the method `send()` that must be implemented by all notification types and allows for configuration settings.

2. **Concrete Notification Classes**
   - **EmailNotification**: Implements the Notification interface to send notifications via email.
   - **SMSNotification**: Implements the Notification interface to send notifications via SMS.
   - **PushNotification**: Implements the Notification interface to send notifications via a mobile app.

3. **NotificationFactory**
   - A factory class that generates the appropriate notification object based on the user's specified type and configuration settings.

4. **NotificationLogger**
   - Logs all sent notifications, providing a record of notification activity.

5. **NotificationQueue**
   - Manages a queue of notifications to be sent, allowing for controlled and batch processing of notifications.

6. **Client Code**
   - The client code utilizes the factory and queue to create and send notifications without needing to know the details of each implementation.

## How to Use

1. **Select Notification Type**: The user specifies their preferred notification type (e.g., Email, SMS, Push) and any configuration settings.
2. **Create Notification**: Use the NotificationFactory to create the appropriate notification object.
3. **Queue Notifications**: Add notifications to the queue using the `enqueue()` method.
4. **Process Notifications**: Call the `processQueue()` method to send all queued notifications.

## Solution

You can find the solution to this problem in the [solution folder](/Learning_2.0/Solutions/Creational-pattern-solutions/notification-service-solution/).
