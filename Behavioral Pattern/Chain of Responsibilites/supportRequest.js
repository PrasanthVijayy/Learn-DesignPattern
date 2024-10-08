// Creating a chain for attain support team

class supportHandler {
  constructor(nextHandler) {
    this.nextHandler = nextHandler;
  }

  // Method to handle the request
  handleRequest(request, type) {
    if (this.nextHandler) {
      console.log("Passing to next executive team to resolve your issue");
    }
    this.nextHandler.handleRequest(request, type);
  }
}

// First level internet support team for connection
class InternetConnectionTeam extends supportHandler {
  handleRequest(request, type) {
    if (request === "internet" && type === "newConnection") {
      console.log("Your newConnection request is taken. Thankyou! 🙂");
    } else if (request === "internet" && type === "problem") {
      console.log("Seems you have issue, we will redirect to support team");
      super.handleRequest(request, type); // Transfering to the next team
    } else {
      console.log(
        "Unknown request type, we will transfer your request to next team! 👍"
      );
      super.handleRequest(request, type); // Transfering to the next team
    }
  }
}

// Second level internet support team for problem
class InternetSupportTeam extends supportHandler {
  handleRequest(request, type) {
    if (request === "internet" && type === "problem") {
      console.log("Your internet request is taken. Thankyou! 🙂");
    } else {
      console.log(
        "Unknown request type, we will transfer your request to next team! 👍"
      );
      super.handleRequest(request, type); // Transfering to the next team
    }
  }
}

// Third level connection
class PhoneConnectionTeam extends supportHandler {
  handleRequest(request, type) {
    if (request === "phone" && type === "newConnection") {
      console.log("Your newConnection request is taken. Thankyou 🙂");
    } else if (request === "phone" && type === "problem") {
      console.log(
        "Seems you are facing issue with phone, we will redirect to phone support team"
      );
      super.handleRequest(request, type); // Transfering to the next team
    } else {
      console.log(
        "Unknown request type, we will transfer your request to next team! 👍"
      );
      super.handleRequest(request, type); // Transfering to the next team
    }
  }
}

// Last level phone support team for problem
class PhoneSupportTeam extends supportHandler {
  handleRequest(request, type) {
    if (request === "phone" && type === "problem") {
      console.log("Your phone request is taken. Thankyou 🙂");
    } else {
      console.log(
        "Unknown request type, please specify your problem correctly! 👍"
      );
      super.handleRequest(request, type); // Transfering to the next team
    }
  }
}

module.exports = {
  InternetConnectionTeam,
  InternetSupportTeam,
  PhoneConnectionTeam,
  PhoneSupportTeam,
};
