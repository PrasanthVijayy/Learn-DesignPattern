# Prototype Pattern: Shape Drawing Application

## Overview

This project implements a **Shape Drawing Application** using the **Prototype Pattern**. The application allows users to create and manipulate various shapes (like Circle, Rectangle, and Triangle) using a prototype-based approach. By leveraging the Prototype Pattern, users can easily clone existing shapes and customize their properties without needing to instantiate new objects from scratch.

## Features

- **Multiple Shape Types**: Supports various shapes including Circle, Rectangle, and Triangle.
- **Cloning Shapes**: Allows users to clone existing shapes and modify their properties.
- **Shape Customization**: Users can customize the color, size, and position of each shape.
- **Drawing Interface**: Provides a simple interface to display and manipulate shapes.

## Internal Structure

1. **Prototype (Shape)**  
   - Defines an interface for cloning itself and includes properties common to all shapes (like color and position).

2. **Concrete Prototypes (Circle, Rectangle, Triangle)**  
   - Each shape class implements the `Shape` interface and provides its specific implementation of the cloning method.
   - Includes methods to customize shape properties.

3. **Client (ShapeManager)**  
   - Responsible for managing the creation and manipulation of shapes.
   - Uses the Prototype Pattern to clone shapes and customize them based on user input.

## How to Use

1. **Create Shapes**: Instantiate concrete shape objects (e.g., Circle, Rectangle).
2. **Clone Shapes**: Use the cloning functionality to create copies of existing shapes.
3. **Customize Properties**: Modify the properties of the cloned shapes, such as color and size.
4. **Draw Shapes**: Visualize the shapes in a drawing interface.

## Solution

You can find the solution to this problem in the [solution folder](/Learning_2.0/Solutions/Creational-pattern-solutions/shape-drawing-application/).
