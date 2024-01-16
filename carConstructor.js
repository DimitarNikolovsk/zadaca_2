// 1. **Create a `Car` Constructor (Abstraction):**

//    - Create a constructor function called `Car` that takes parameters for `make`, `model`, and `year`, or be extra creative and add even more properties to the Car abstractaion.
//    - Inside the constructor, assign these parameters to the respective properties of the object.
//    - Use ES5 syntax (function Car() {})
//    - Extra points for converting the ES5 syntax to ES6 (needs self investigating for this purpouse)

// --- so es5 syntax
function Car_1(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  // this.drive()= function(){} -- star nacin
}

Car_1.prototype.drive = function () {
  console.log(`${this.make} is from ${this.year}`);
};
const bmw = new Car_1("BMW", "X6", 2022);
const mercedes = new Car_1("mercedes", "CLS", 2020);
const car_1 = new Car_1("BMW", 730, 2020, "Germany", 80000);
const car_2 = new Car_1("Audi", "Q5", 2019, "Germany", 70000);
const car_3 = new Car_1("Skoda", "Kodiaq", 2022, "Czech Republic", 50000);

bmw.drive();
mercedes.drive();
car_1.drive();
Car_1.prototype.stop = function () {
  console.log(`Car has stop ${this.make}`);
};

function Driver(name, age, experiance) {
  this.name = name;
  this.age = age;
  this.experiance = experiance;
}

Driver.prototype.driveCar = function () {
  console.log(`this driver is ${this.name}`);
};

const driver_1 = new Driver("Dimitar", 36, 18);
driver_1.driveCar();

const driver_2 = new Driver("Viktor", 49, 30);
driver_2.driveCar();

const driver_3 = new Driver("Maja", 30, 10);
driver_3.driveCar();

function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
function Car1(make, model, year, fuelType) {
  Vehicle.call(this, make, model, year);
  this.fuelType = fuelType;
}
let toyota = new Car1("Toyota", "Camry", 2022, "Gasoline");

console.log(toyota);

function Truck(make, model, year, payloadCapacity) {
  Vehicle.call(this, make, model, year);
  this.payloadCapacity = payloadCapacity;
}

let myCar1 = new Car1("Toyota", "Camry", 2022, "Gasoline");
let myTruck = new Truck("Ford", "F150", 2021, "1000 lbs");

console.log(myCar1);
console.log(myTruck);

// ova e es6 syntax
// class Car {
//   constructor(make, model, year, country, price) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.country = country;
//     this.price = price;
//   }
//   start() {
//     console.log(`${this.make} ${this.model}${this.year} has started`);
//   }
//   stop() {
//     console.log(`${this.make} ${this.model} ${this.year} has stopped`);
//   }
// }

// class Car {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }

//   start() {
//     console.log(`${this.make} ${this.model} (${this.year}) has started.`);
//   }

//   stop() {
//     console.log(`${this.make} ${this.model} (${this.year}) has stopped.`);
// }

// 2. **Create Instances of `Car`:**

//    - Create three instances of the `Car` constructor with different values for `make`, `model`, and `year`.

// console.log(car_1);

// console.log(car_2.start);

// console.log(car_3);

// const person1 = new Person("Alice", 30);
// console.log(person1.name);
// const person2 = new Person("Bob", 25);
// console.log(person2);

// 3. **Add a Method to `Car`:**

//    - Add a method called `start` to the `Car` prototype that logs a message indicating that the car has started.
//    - Add a method called `stop` to the `Car` prototype that logs a message indicating that the car has stopped.

// Car.prototype.start = function () {
//   console.log(`Car has started ${this.make}`);
// };
//;
// };
// console.log(car_3.start());
// car_1.start();
// console.log(car_1.stop());

// Person.prototype.sayHello = function () {
//     console.log(`Hello my name is ${this.name}`);
// console.log(person2.sayHello());

//4 **Create a `Driver` Constructor:**

//    - Create a constructor function  `Driver` that takes parameters for `name`, `age`, and `experience` (in years).
//    - Inside the constructor, assign these parameters to the respective properties of the object.

//5 **Create Instances of `Driver`:**

// - Create three instances of the `Driver` constructor with different values for `name`, `age`, and `experience`.

// 6. **Add a Method to `Driver`:**

//    - Add a method called `driveCar` to the `Driver` prototype that takes a `Car` object as a parameter and logs a message indicating that the driver is driving the specified car.

// 7. **Car and Driver Interaction:**
//    - Create a new instance of `Car` and an instance of `Driver`.
//    - Use the `driveCar` method to make the driver drive the car.

// ## BONUS TASK

// 1. Investigate how to obtain inheritance with the ES5 syntax (hint: use call method).

// 2. **Investigate what is an inheritance in the scope of OOP**
//    - Create a `Vehicle` constructor
//    - Think how a `Car` abstraction can inherit from the `Vehicle` abstraction
//    - Move some of the properties and methods of the `Car` constructor as part of the `Vehicle` constructor and use proper syntax for those properties and methods to be available also on the `Car` instances by means of inheritance.
//    - Create `Truck` constructor. Make it also inherit from `Vehicle` constructor.

// resenie na zadacata vo es 6 so se 7 mi task

// class Driver {
//   constructor(name, age, experience) {
//     this.name = name;
//     this.age = age;
//     this.experience = experience;
//   }

//   driveCar(car) {
//     console.log(`${this.name} is driving ${car.make} ${car.model} (${car.year}).`);
//   }
// }

// const myCar = new Car('Toyota', 'Camry', 2022);
// const myDriver = new Driver('Alice', 30, 5);

// myCar.start();

// myDriver.driveCar(myCar);

// myCar.stop();
