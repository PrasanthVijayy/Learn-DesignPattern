// organizationStructure.js
const Organization = require("./organization");

class Employee extends Organization {
  constructor(name, position, salary, role) {
    super();
    this.name = name;
    this.position = position;
    this.salary = salary;
    this.role = role;
    this.tasks = [];
  }

  getDetails() {
    return `\n Name: ${this.name}, \n -Position: ${this.position}, \n -Salary: ${this.salary}, \n - Role: ${this.role}`;
  }

  assignTask(task) {
    this.tasks.push(task);
  }

  showTasks() {
    return this.tasks;
  }

  showSalary() {
    return this.salary;
  }
}

class Department extends Organization {
  constructor(name) {
    super();
    this.name = name;
    this.employees = [];
  }

  getDetails() {
    const details = `Department: ${this.name} \n Employees:`;
    return details + this.employees.map((emp) => emp.getDetails()).join("");
  }

  add(component) {
    if (component instanceof Organization) {
      this.employees.push(component);
    }
  }

  remove(component) {
    this.employees = this.employees.filter((emp) => emp !== component);
  }

  assignTask(task) {
    this.employees.forEach((emp) => {
      emp.assignTask(task);
    });
  }
}

module.exports = {
  Employee,
  Department,
};
