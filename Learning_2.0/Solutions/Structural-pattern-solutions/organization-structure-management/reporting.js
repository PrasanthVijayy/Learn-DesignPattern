// reporting.js
class Reporting {
  static generateReport(department) {
    console.log(department.getDetails());
  }

  static generateEmployeeReport(employee) {
    console.log(employee.getDetails());
    console.log("Tasks assigned:", employee.showTasks());
  }
}

module.exports = Reporting;
