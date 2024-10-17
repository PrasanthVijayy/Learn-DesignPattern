# Builder Pattern: House Construction System

## Overview

This project demonstrates a **House Construction System** using the **Builder Pattern**. The system constructs various types of houses (e.g., Wooden, Brick, or Glass) by allowing step-by-step construction, giving the client control over the process. The builder pattern separates the construction of complex objects from their representation, making the system flexible and extendable.

## Features

- **Customizable House Construction**: The system supports building houses with various components like walls, doors, windows, and roofs.
- **Different House Types**: It supports building Wooden, Brick, and Glass houses with different material properties and design features.
- **Modular Construction**: The house construction can be customized step-by-step, allowing dynamic modifications during the build process.
- **Director for Construction Process**: A `Director` orchestrates the construction process for creating predefined house types.

## Internal Structure

1. **Builder (HouseBuilder)**

   - Abstract interface defining the steps required to construct a house.
   - Provides methods to build each component of the house (walls, doors, windows, and roof).

2. **Concrete Builders (WoodenHouseBuilder, BrickHouseBuilder, GlassHouseBuilder)**

   - Implement the specific details of constructing different house types (Wooden, Brick, Glass).
   - Each builder provides a method for creating a house with different materials and layouts.

3. **Product (House)**

   - Represents the final house object constructed by the builder.
   - Contains properties like the number of walls, doors, windows, and roof material.

4. **Director (ConstructionDirector)**
   - Responsible for managing the building process.
   - Provides methods for constructing specific types of houses in a predefined sequence.

## How to Use

1. **Choose a House Type**: Select the type of house (Wooden, Brick, Glass) using the respective builder.
2. **Step-by-Step Construction**: Use the builder methods to add walls, doors, windows, and roofs.
3. **Build the House**: The director orchestrates the process to create a complete house.
4. **View the Result**: After construction is complete, retrieve the final house object with its details.

## Solution

You can find the solution to this problem in the [solution folder](/Learning_2.0/Solutions/Creational-pattern-solutions/house-construction-system/).
