# Strategy Pattern: Sorting Algorithm Selector

## Overview

This project demonstrates the implementation of the Strategy Pattern through a sorting algorithm selector. Users can choose from different sorting algorithms at runtime, allowing for flexibility and extensibility when adding new sorting methods.

## Features

- **Multiple Sorting Algorithms**: Supports Bubble Sort, Quick Sort, and Merge Sort algorithms.
- **Dynamic Algorithm Selection**: Users can switch sorting algorithms at runtime.
- **Performance Measurement**: Each sorting algorithm can be measured for performance.
- **Handles Edge Cases**: Properly manages empty arrays and arrays with a single element.

## Internal Structure

The project is organized into the following components:

1. **SortStrategy Interface**
   - Defines the method `sort(array)` for sorting algorithms.

2. **Concrete Sorting Strategy Classes**
   - **BubbleSort**: Implements the SortStrategy interface using the bubble sort algorithm.
   - **QuickSort**: Implements the SortStrategy interface using the quick sort algorithm.
   - **MergeSort**: Implements the SortStrategy interface using the merge sort algorithm.

3. **SortingContext Class**
   - Maintains a reference to a SortStrategy and allows changing the sorting strategy at runtime.
   - Invokes the `sort(array)` method of the currently set sorting strategy.

4. **Main Application**
   - Demonstrates the usage of the SortingContext with different sorting strategies.
   - Allows users to see how switching algorithms affects sorting results.

## How to Use

1. **Initialize the Sorting Context**: Create an instance of the SortingContext.
2. **Set a Sorting Strategy**: Choose a sorting algorithm (e.g., BubbleSort, QuickSort, MergeSort).
3. **Sort an Array**: Call the sort method on the context to sort an array using the selected algorithm.
4. **Change Strategy**: Switch to a different sorting algorithm at runtime to see how it performs.

## Solution

You can find the solution to this problem in the [solution folder](/Learning_2.0/Solutions/Behavioural-pattern-solutions/algorithm-sorting-solution/).
