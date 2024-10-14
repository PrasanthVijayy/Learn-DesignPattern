# Behavioral Patterns

Behavioral patterns focus on communication between objects, facilitating better interaction and coordination between them.

## a. Observer Pattern

- **Purpose**: Defines a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.
- **Use Cases**: Event handling systems, publish-subscribe systems.
- **Advantages**: Promotes loose coupling, dynamic relationships.
- **Example**: A news agency that notifies subscribers when a new article is published.

## b. Strategy Pattern

- **Purpose**: Defines a family of algorithms, encapsulates each one, and makes them interchangeable at runtime.
- **Use Cases**: Selecting an algorithm at runtime, such as different payment methods or sorting algorithms.
- **Advantages**: Promotes the open/closed principle, allows for dynamic algorithm selection.
- **Example**: A navigation app that switches between different routing algorithms (shortest path, fastest path, etc.).

## c. Command Pattern

- **Purpose**: Encapsulates a request as an object, allowing parameterization and queuing of requests.
- **Use Cases**: Implementing undo/redo functionality, executing menu actions in applications.
- **Advantages**: Decouples the request sender from the receiver, supports undoable operations.
- **Example**: A text editor that can execute, undo, and redo commands like cut, copy, and paste.

## d. State Pattern

- **Purpose**: Allows an object to alter its behavior when its internal state changes.
- **Use Cases**: Managing different states of an object, such as traffic lights or a vending machine.
- **Advantages**: Simplifies state transition logic, reduces complexity by delegating behavior to state objects.
- **Example**: A phone application where the phone behaves differently based on its state (ringing, idle, in-call).

## e. Template Method Pattern

- **Purpose**: Defines the skeleton of an algorithm in a superclass but allows subclasses to redefine certain steps of the algorithm.
- **Use Cases**: Frameworks that provide a base class but allow customization.
- **Advantages**: Promotes code reuse, provides a clear structure for algorithms.
- **Example**: A cooking recipe template that defines steps for making meals (boil water, brew coffee/tea, etc.).

## f. Visitor Pattern

- **Purpose**: Lets you define new operations without changing the classes of the objects on which it operates.
- **Use Cases**: Operations on composite objects, such as object structure traversal.
- **Advantages**: Allows adding new operations without modifying object classes, simplifies adding new functionality.
- **Example**: A shopping cart that applies different operations, such as calculating discounts and taxes.

## g. Chain of Responsibility

- **Purpose**: Passes a request along a chain of handlers, allowing multiple objects a chance to process the request.
- **Use Cases**: Event handling systems, request processing pipelines.
- **Advantages**: Reduces coupling between the sender and receiver, allows for dynamic handling of requests.
- **Example**: A customer service system where requests are handled by different departments (support, billing, technical).

## h. Mediator Pattern

- **Purpose**: Defines an object that encapsulates how a set of objects interact, promoting loose coupling.
- **Use Cases**: Communication between components in a system, such as chat applications.
- **Advantages**: Reduces direct dependencies between objects, centralizes communication logic.
- **Example**: A chat room where users communicate through a mediator that handles message distribution.

## i. Memento Pattern

- **Purpose**: Captures and externalizes an object's internal state without violating encapsulation.
- **Use Cases**: Implementing undo functionality, saving states of an object.
- **Advantages**: Provides a way to restore an object to its previous state without exposing its internals.
- **Example**: A text editor that allows users to undo changes made to the document.

## j. Iterator Pattern

- **Purpose**: Provides a way to access elements of a collection without exposing its underlying representation.
- **Use Cases**: Iterating over different collections, such as lists or trees.
- **Advantages**: Simplifies collection traversal and allows multiple iterators on the same collection.
- **Example**: A menu system that allows users to navigate through different food items.

## k. Interpreter Pattern

- **Purpose**: Defines a representation for a grammar along with an interpreter that uses the representation to interpret sentences in the language.
- **Use Cases**: Designing a domain-specific language or parsing expressions.
- **Advantages**: Provides a way to evaluate sentences in a language, allowing easy extension of the language.
- **Example**: A simple calculator that interprets and evaluates mathematical expressions.

## l. Null Object Pattern

- **Purpose**: Uses a special object to represent a null value, avoiding null checks in code.
- **Use Cases**: Situations where you want to provide default behavior without using null references.
- **Advantages**: Reduces the need for null checks, simplifies code.
- **Example**: A logging system where a null logger object can be used instead of a real logger.

## m. Flyweight Pattern

- **Purpose**: Reduces memory usage by sharing common parts of the state between multiple objects.
- **Use Cases**: Managing large numbers of similar objects, such as in graphics rendering.
- **Advantages**: Minimizes memory footprint by sharing state.
- **Example**: A text editor that shares font objects between characters to save memory.
