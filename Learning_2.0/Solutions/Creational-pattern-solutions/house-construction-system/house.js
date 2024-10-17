class House {
  constructor() {
    this.walls = 0;
    this.doors = 0;
    this.windows = 0;
    this.roof = "";
    this.material = "";
  }

  displayHouse() {
    console.log("Congratulations! Your house is ready.");
    console.log(
      `The materials count are :\n -Walls: ${this.walls} \n -Roof: ${this.roof} \n -Windows: ${this.windows} \n -Doors: ${this.doors} \n -Material: ${this.material}`
    );
  }
}

module.exports = House;
