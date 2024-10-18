# Composite Pattern: Advanced Organization Structure Management System

## Overview

This project implements an **Advanced Organization Structure Management System** using the **Composite Pattern**, allowing for a flexible and hierarchical representation of employees, teams, and departments. The system supports role-based access control, task management, and detailed reporting functionalities, making it suitable for complex organizational needs.

## Features

- **Hierarchical Structure**: Create a tree structure where employees can belong to teams or departments, enabling complex organizational hierarchies.
- **Role-Based Access Control**: Assign different roles (e.g., Manager, Employee, Admin) to users to control access to certain functionalities within the system.
- **Task Assignment**: Allow managers to assign tasks to employees or teams, track progress, and manage deadlines.
- **Detailed Reporting**: Generate reports on employee performance, departmental achievements, and overall organizational statistics.
- **Uniform Interface**: Provide a common interface for both individual employees and groups, allowing for consistent operations such as getting total salary, displaying employee details, or calculating task completion rates.

## Internal Structure

The project consists of the following components:

1. **Component Interface**

   - Defines the common methods for both `Employee` and `Department`, ensuring that both can be treated uniformly.

2. **Leaf Class (Employee)**

   - Represents individual employees in the organization. Implements methods for salary calculation, displaying details, and task management (e.g., adding, updating tasks).

3. **Composite Class (Department)**

   - Represents a group of employees and/or other departments. Implements methods to manage its child components (employees or sub-departments) and handles task assignment at the departmental level.

4. **Role Class**

   - Defines the different roles within the organization, including permissions associated with each role.

5. **Reporting Class**

   - Responsible for generating reports based on organizational data, employee performance metrics, and task completion statistics.

6. **Client Code**
   - Demonstrates how to create the organization structure, adding employees and departments, assigning tasks, and generating reports.

## How to Use

1. **Create Employees**: Instantiate `Employee` objects with necessary details (name, position, salary, role).
2. **Create Departments**: Instantiate `Department` objects, which can contain employees or other departments.
3. **Add Employees to Departments**: Use methods to add employees to departments or to add sub-departments.
4. **Assign Tasks**: Managers can assign tasks to employees or teams, track their status, and set deadlines.
5. **Generate Reports**: Call reporting methods to generate insights into employee performance, departmental achievements, and overall statistics.

## Solution

You can find the solution to this problem in the [solution folder](/Learning_2.0/Solutions/Structural-pattern-solutions/organization-structure-management/).
