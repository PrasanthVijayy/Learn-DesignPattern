# Factory Method Pattern: Notification Service

## Overview

This project implements the Factory Method Pattern to create a flexible Notification Service that can send notifications to users through various channels such as email, SMS, and push notifications. The design allows the system to dynamically create notification objects based on user preferences, enabling easy extensibility and maintenance.

## Features

- **Multiple Notification Types**: Supports sending notifications via Email, SMS, and Push notifications.
- **Dynamic Notification Creation**: Users can specify their preferred notification method, and the system will create the appropriate notification object.
- **Common Interface**: All notification types share a common interface for sending notifications, ensuring a uniform implementation.
- **Extensible Architecture**: New notification types can be added without modifying existing code.

## Internal Structure

The project is organized into the following components:

1. **Notification Interface**
   - Defines the method `send()` that must be implemented by all notification types.

2. **Concrete Notification Classes**
   - **EmailNotification**: Implements the Notification interface to send notifications via email.
   - **SMSNotification**: Implements the Notification interface to send notifications via SMS.
   - **PushNotification**: Implements the Notification interface to send notifications via a mobile app.

3. **NotificationFactory**
   - A factory class that generates the appropriate notification object based on the user's specified type. It encapsulates the instantiation logic for different notification types.

4. **Client Code**
   - The client code utilizes the factory to create notifications without needing to know the details of how each notification is implemented.

## How to Use

1. **Select Notification Type**: The user specifies their preferred notification type (e.g., Email, SMS, Push).
2. **Create Notification**: Use the NotificationFactory to create the appropriate notification object.
3. **Send Notification**: Call the `send()` method on the created notification object to send the notification.

## Solution

You can find the solution to this problem in the [solution folder](/Learning_2.0/Problems/Creational-pattern-problems/).
