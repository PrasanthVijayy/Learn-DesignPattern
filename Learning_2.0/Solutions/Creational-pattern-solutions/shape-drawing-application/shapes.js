// Shape.js - Prototype
class Shape {
  constructor(color) {
    this.color = color;
  }

  clone() {
    throw new Error("Method 'clone()' must be implemented.");
  }
}

// Circle.js - Concrete Prototype
class Circle extends Shape {
  constructor(radius, color) {
    super(color);
    this.radius = radius;
  }

  clone() {
    return new Circle(this.radius, this.color);
  }

  getDetails() {
    return `Circle: Radius = ${this.radius}, Color = ${this.color}`;
  }
}

// Rectangle.js - Concrete Prototype
class Rectangle extends Shape {
  constructor(width, height, color) {
    super(color);
    this.width = width;
    this.height = height;
  }

  clone() {
    return new Rectangle(this.width, this.height, this.color);
  }

  getDetails() {
    return `Rectangle: Width = ${this.width}, Height = ${this.height}, Color = ${this.color}`;
  }
}

// Triangle.js - Concrete Prototype
class Triangle extends Shape {
  constructor(base, height, color) {
    super(color);
    this.base = base;
    this.height = height;
  }

  clone() {
    return new Triangle(this.base, this.height, this.color);
  }

  getDetails() {
    return `Triangle: Base = ${this.base}, Height = ${this.height}, Color = ${this.color}`;
  }
}

// ShapeManager.js - Client
class ShapeManager {
  constructor() {
    this.shapes = {};
  }

  addShape(key, shape) {
    this.shapes[key] = shape;
  }

  cloneShape(key) {
    const shapeToClone = this.shapes[key];
    return shapeToClone ? shapeToClone.clone() : null;
  }
}

// Example usage
const shapeManager = new ShapeManager();

const circle = new Circle(10, "red");
shapeManager.addShape("circle", circle);

const clonedCircle = shapeManager.cloneShape("circle");
console.log(clonedCircle.getDetails()); // Circle: Radius = 10, Color = red

const rectangle = new Rectangle(5, 10, "blue");
shapeManager.addShape("rectangle", rectangle);

const clonedRectangle = shapeManager.cloneShape("rectangle");
console.log(clonedRectangle.getDetails()); // Rectangle: Width = 5, Height = 10, Color = blue

const triangle = new Triangle(6, 8, "green");
shapeManager.addShape("triangle", triangle);

const clonedTriangle = shapeManager.cloneShape("triangle");
console.log(clonedTriangle.getDetails()); // Triangle: Base = 6, Height = 8, Color = green
