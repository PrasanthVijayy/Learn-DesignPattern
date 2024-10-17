const {
  WoodenHouseBuilder,
  BrickHouseBuilder,
  GlassHouseBuilder,
} = require("./houseBuilder");
const ConstructionDirector = require("./construction");

// Initialize Director
const director = new ConstructionDirector();

// Build a Wooden House
const woodenHouseBuilder = new WoodenHouseBuilder();
director.setBuilder(woodenHouseBuilder);
director.constructHouse();
const woodenHouse = woodenHouseBuilder.getHouse();
woodenHouse.displayHouse();

// Build a Brick House
const brickHouseBuilder = new BrickHouseBuilder();
director.setBuilder(brickHouseBuilder);
director.constructHouse();
const brickHouse = brickHouseBuilder.getHouse();
brickHouse.displayHouse();

// Build a Glass House
const glassHouseBuilder = new GlassHouseBuilder();
director.setBuilder(glassHouseBuilder);
director.constructHouse();
const glassHouse = glassHouseBuilder.getHouse();
glassHouse.displayHouse();
