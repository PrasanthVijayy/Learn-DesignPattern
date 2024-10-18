class Organization {
  getDetails() {
    throw new Error("Method getDetails() must be implemented");
  }
  add(component) {
    throw new Error("Method add() must be implemented");
  }

  remove(component) {
    throw new Error("Method remove() must be implemented");
  }

  assignTask(task) {
    throw new Error("Method assignTask() must be implemented");
  }
}

module.exports = Organization;
