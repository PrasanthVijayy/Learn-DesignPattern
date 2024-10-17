# Decorator Pattern: File Processing System

## Overview

This project implements the Decorator Pattern through a file processing system that allows users to read and manipulate files with various processing capabilities. The design enables dynamic addition of functionalities such as encryption, compression, and logging to file operations without modifying the core file classes. This approach promotes flexibility and reusability in file handling.

## Features

- **Flexible File Processing**: Users can create file objects and apply various decorators to customize file operations.
- **Dynamic Functionality**: Decorators can be added or removed at runtime, enhancing the file handling capabilities on-the-fly.
- **Separation of Concerns**: Core file operations are kept separate from additional processing functionalities, improving maintainability.

## Internal Structure

The project is organized into the following components:

1. **File Interface**
   - Defines the common methods (read and write) for all file types, ensuring consistent operation across different file implementations.

2. **Concrete File Classes**
   - **TextFile**: Implements the File interface for handling plain text data.
   - **BinaryFile**: Implements the File interface for managing binary data operations.

3. **Decorator Class**
   - An abstract class that implements the File interface, allowing decorators to add functionalities to the file operations.

4. **Concrete Decorators**
   - **EncryptionDecorator**: Adds encryption capabilities to file data during read and write operations, ensuring secure handling of sensitive information.
   - **CompressionDecorator**: Compresses file data before writing it to disk and decompresses it upon reading, optimizing storage space.
   - **LoggingDecorator**: Logs all read and write operations for auditing purposes, providing a record of file interactions.

5. **Client Code**
   - Demonstrates how to create file objects and apply various decorators to customize file processing operations. Shows the ability to combine multiple decorators for enhanced functionality.

## How to Use

1. **Initialize File Objects**: Create instances of the `TextFile` or `BinaryFile` classes.
2. **Apply Decorators**: Wrap the file objects with desired decorators (e.g., `EncryptionDecorator`, `CompressionDecorator`, `LoggingDecorator`) to enhance their functionality.
3. **Perform File Operations**: Use the methods defined in the File interface to read from and write to the decorated file objects.
4. **Dynamic Decorator Management**: Add or remove decorators as needed to adjust the file handling capabilities.

## Solution

You can find the solution to this problem in the [solution folder](/Learning_2.0/Solutions/Structural-pattern-solutions/file-processing-system/).
