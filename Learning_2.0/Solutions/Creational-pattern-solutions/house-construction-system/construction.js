// Director class (Construction Director)
class ConstructionDirector {
  setBuilder(builder) {
    this.builder = builder;
  }
  constructHouse() {
    this.builder.buildWalls();
    this.builder.buildDoors();
    this.builder.buildWindows();
    this.builder.buildRoof();
  }
}

module.exports = ConstructionDirector;
