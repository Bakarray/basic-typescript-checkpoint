"use strict";
// Implement a class named Car that implements the Vehicle interface. The Car class should have:
class Car {
    // A constructor that initializes the make, model, and year properties.
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Implement the start method to log "Car engine started" to the console.
    start() {
        console.log("Engine started");
    }
}
// Create an instance of the Car class and initialize it with some values for make, model, and year.
const car1 = new Car("Subaru", "360GX", 1978);
// Call the start method on the instance of the Car class to verify that it logs the appropriate message to the console.
car1.start();
// Finally, compile your TypeScript code into JavaScript and run it to ensure everything works as expected.
