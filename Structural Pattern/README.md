## 2. Structural Patterns

Structural patterns deal with object composition, ensuring that changes in one part of the system don’t affect the entire system.

### a. Adapter Pattern

- Purpose: Allows incompatible interfaces to work together by creating an adapter.
- Use Cases: Integrating new components into an existing system.
- Advantages: Promotes reusability, reduces code coupling.
- Example: An application that uses an adapter to work with a new payment gateway while maintaining the existing payment processing interface.

### b. Composite Pattern

- Purpose: Composes objects into tree structures to represent part-whole hierarchies.
- Use Cases: File systems, graphic systems with nested shapes or components.
- Advantages: Simplifies client code by treating individual and composite objects uniformly.
- Example: A graphic editor where shapes can be grouped together for collective transformations.

### c. Proxy Pattern

- Purpose: Provides a surrogate or placeholder for another object to control access to it.
- Use Cases: Lazy loading, access control, logging.
- Advantages: Adds a layer of control, enhances security.
- Example: A proxy that controls access to a remote object, handles communication, and caches results.

### d. Decorator Pattern

- Purpose: Dynamically adds behavior or responsibilities to objects without modifying their structure.
- Use Cases: Extending functionality without subclassing.
- Advantages: Provides flexibility in extending functionality, avoids class explosion.
- Example: Adding multiple features to a pizza (toppings, extra cheese, etc.) without changing its original class.

### e. Facade Pattern

- Purpose: Provides a simplified interface to a complex subsystem.
- Use Cases: Simplifying interaction with complex libraries or APIs.
- Advantages: Reduces the complexity for the client, promotes loose coupling between client and subsystem.
- Example: A facade for a multimedia library that simplifies video/audio playback for the client.
