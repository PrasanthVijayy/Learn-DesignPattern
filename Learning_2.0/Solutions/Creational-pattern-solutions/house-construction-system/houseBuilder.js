const House = require("./house");

// HouseBuilder interface (Builder)
class HouseBuilder {
  buildWalls() {
    throw new Error("Method buildWalls() must be implemented");
  }
  buildDoors() {
    throw new Error("Method buildDoors() must be implemented");
  }
  buildWindows() {
    throw new Error("Method buildWindows() must be implemented");
  }
  buildRoof() {
    throw new Error("Method buildRoof() must be implemented");
  }
  getHouse() {
    throw new Error("Method getHouse() must be implemented");
  }
}

// Concrete Builder for Wooden House
class WoodenHouseBuilder extends HouseBuilder {
  constructor() {
    super();
    this.house = new House();
    this.house.material = "Wood";
  }
  buildWalls() {
    this.house.walls = 4;
  }
  buildDoors() {
    this.house.doors = 2;
  }
  buildWindows() {
    this.house.windows = 4;
  }
  buildRoof() {
    this.house.roof = "Wooden Roof";
  }
  getHouse() {
    return this.house;
  }
}

// Concrete Builder for Brick House
class BrickHouseBuilder extends HouseBuilder {
  constructor() {
    super();
    this.house = new House();
    this.house.material = "Brick";
  }
  buildWalls() {
    this.house.walls = 6;
  }
  buildDoors() {
    this.house.doors = 3;
  }
  buildWindows() {
    this.house.windows = 6;
  }
  buildRoof() {
    this.house.roof = "Concrete Roof";
  }
  getHouse() {
    return this.house;
  }
}

// Concrete Builder for Glass House
class GlassHouseBuilder extends HouseBuilder {
  constructor() {
    super();
    this.house = new House();
    this.house.material = "Glass";
  }
  buildWalls() {
    this.house.walls = 4;
  }
  buildDoors() {
    this.house.doors = 1;
  }
  buildWindows() {
    this.house.windows = 8;
  }
  buildRoof() {
    this.house.roof = "Glass Roof";
  }
  getHouse() {
    return this.house;
  }
}

module.exports = { WoodenHouseBuilder, BrickHouseBuilder, GlassHouseBuilder };
