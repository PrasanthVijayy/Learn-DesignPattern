// main.js
const {Employee, Department} = require("./organizationStructure");
const Reporting = require("./reporting");

// Create Employees
const emp1 = new Employee("Alice", "Developer", 60000, "Employee");
const emp2 = new Employee("Bob", "Manager", 80000, "Manager");

// Create Department
const devDepartment = new Department("Development");

// Add Employees to Department
devDepartment.add(emp1);
devDepartment.add(emp2);

// Assign Tasks
emp1.assignTask("Complete project A");
emp2.assignTask("Manage team meetings");

// Generate Reports
Reporting.generateReport(devDepartment);
Reporting.generateEmployeeReport(emp1);
Reporting.generateEmployeeReport(emp2);
