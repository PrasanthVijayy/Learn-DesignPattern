// Abstract file class
class File {
  read() {
    throw new Error("Method 'read()' must be implemented");
  }

  write(data) {
    throw new Error("Method 'write()' must be implemented");
  }
}

//Concrete file class - Text file
class TextFile extends File {
    constructor(fileName) {
        super();
        this.fileName = fileName;
        this.content = ""; // Initialize content as an empty string
      }
  read() {
    console.log(`Reading text file from ${this.fileName}: ${this.content}`);
    return this.content;
  }

  write(data) {
    this.content = data;
    console.log(`Writing text file to ${this.fileName}: ${this.content}`);
  }
}

// Concrete file class - Binary file
class BinaryFile extends File {
  constructor(fileName) {
    super();
    this.fileName = fileName;
    this.content = Buffer.from([]);
  }

  read() {
    console.log(
      `Reading binary file from ${this.fileName}: ${this.content.toString(
        "hex"
      )}`
    );
    return this.content;
  }

  write(data) {
    this.content = Buffer.from(data);
    console.log(
      `Writing binary file to ${this.fileName}: ${this.content.toString("hex")}`
    );
  }
}

module.exports = { File, TextFile, BinaryFile };
