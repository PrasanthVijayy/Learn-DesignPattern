const { TextFile } = require("./file");
const {
  Encryption,
  CompressionDecorator,
  LoggingDecorator,
} = require("./decorator");

const myFile = new TextFile("myFile.txt");

// Wrapping with decorator classes
let encryptedFile = new Encryption(myFile);
let compressedFile = new CompressionDecorator(encryptedFile);
let loggedFile = new LoggingDecorator(compressedFile);

loggedFile.write("Hello, Decorator!");

// Reading data from file
const data = loggedFile.read();
console.log(`Data read from file: ${data}`);
