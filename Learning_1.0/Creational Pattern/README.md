# Creational Patterns

Creational patterns focus on object creation mechanisms, providing ways to create objects suited to the situation, increasing flexibility and reuse of code.

## a. Singleton Pattern
<p align="center">
  <img src="/Learning_1.0/images/singleton_DP.webp" alt="Singleton Patterns Logo" width="300" height="200">
</p>

- **Purpose**: Ensures a class has only one instance and provides a global access point to that instance.
- **Use Cases**: Configuration settings, logging, thread pools.
- **Advantages**: Controlled access to a single instance, reduces namespace pollution.
- **Example**: A configuration manager that loads settings once and is accessed globally.

## b. Factory Method Pattern

- **Purpose**: Defines an interface for creating objects, but lets subclasses decide which class to instantiate.
- **Use Cases**: GUI frameworks, document creation systems.
- **Advantages**: Promotes loose coupling, encapsulates object creation logic.
- **Example**: A shape-drawing application where different shapes (circle, square) are created based on user input.

## c. Abstract Factory Pattern

- **Purpose**: Provides an interface for creating families of related or dependent objects without specifying their concrete classes.
- **Use Cases**: Cross-platform UI toolkits, game development.
- **Advantages**: Ensures consistency among products, makes it easier to switch between product families.
- **Example**: A UI toolkit that supports multiple themes, where each theme provides a set of UI components (buttons, sliders, etc.).

## d. Builder Pattern

- **Purpose**: Separates the construction of a complex object from its representation, allowing the same construction process to create different representations.
- **Use Cases**: Constructing complex objects such as HTML documents, complex configurations.
- **Advantages**: Improves readability and maintainability, provides flexibility in building different representations.
- **Example**: A meal builder that creates different meal combinations.

## e. Prototype Pattern

- **Purpose**: Creates new objects by copying an existing object, called the prototype.
- **Use Cases**: When object creation is expensive, and cloning is more efficient.
- **Advantages**: Reduces the need for multiple classes, provides dynamic object creation at runtime.
- **Example**: A game where new enemy types are created by cloning existing ones with modifications.
