// Decorator abstract class

const { File } = require("./file");

class FileDecorator extends File {
  constructor(file) {
    super();
    this.file = file;
  }

  read() {
    return this.file.read();
  }

  write(data) {
    return this.file.write(data);
  }
}

// Decorator concrete classes - Encryption class

class Encryption extends FileDecorator {
  encrypt(data) {
    return Buffer.from(data.split("").reverse().join("")).toString("base64"); // Simple encryption
  }

  decrypt(data) {
    return Buffer.from(data, "base64")
      .toString("utf8")
      .split("")
      .reverse()
      .join(""); // Simple decryption
  }
  write(data) {
    const encryptedData = this.encrypt(data);
    console.log(`Encrypting data before writing.`);
    super.write(encryptedData);
  }

  read() {
    const encryptedData = super.read();
    const decryptedData = this.decrypt(encryptedData);
    console.log(`Decrypting data after reading.`);
    return decryptedData;
  }
}

// Decorator concrete classes - Compression class
class CompressionDecorator extends FileDecorator {
  compress(data) {
        return data.split("").join("");
    }

  decompress(data) {
    return data;
  }

  write(data) {
    const compressedData = this.compress(data);
    console.log(`Compressing data before writing.`);
    super.write(compressedData);
  }

  read() {
    const compressedData = super.read();
    const decompressedData = this.decompress(compressedData);
    console.log(`Decompressing data after reading.`);
    return decompressedData;
  }
}

// Decorator concrete classes - Logging class
class LoggingDecorator extends FileDecorator {
  write(data) {
    console.log(`Logging: Writing data - ${data}`);
    super.write(data);
  }

  read() {
    console.log(`Logging: Reading data.`);
    return super.read();
  }
}

module.exports = { Encryption, CompressionDecorator, LoggingDecorator };
