class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`${this.make} ${this.model} (${this.year}) has started.`);
  }

  stop() {
    console.log(`${this.make} ${this.model} (${this.year}) has stopped.`);
  }
}
const car_1 = new Car("BMW", 730, 2020, "Germany", 80000);

console.log(car_1);
car_1.start();
car_1.stop();

const car_2 = new Car("Audi", "Q5", 2019, "Germany", 70000);
car_2.start();
car_2.stop();

const car_3 = new Car("Skoda", "Kodiaq", 2022, "Czech Republic", 50000);
car_3.start();
car_3.stop();

class Driver {
  constructor(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
  }

  driveCar(car) {
    console.log(
      `${this.name} with ${this.experience} years experiance is driving ${car.make} ${car.model} (${car.year}).`
    );
  }
}

const driver_1 = new Driver("Dimitar", 36, 18);
driver_1.driveCar(car_1);

const driver_2 = new Driver("Viktor", 49, 30);
driver_2.driveCar(car_2);

const driver_3 = new Driver("Maja", 30, 10);
driver_3.driveCar(car_3);

//bonus
function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

function Car1(make, model, year, fuelType, doors) {
  Vehicle.call(this, make, model, year);
  this.fuelType = fuelType;
  this.doors = doors;
}

let myCar1 = new Car1("Toyota", "Camry", 2022, "Gasoline", 5);

console.log(myCar1);

let myCar2 = new Car1("Land Rover", "Free Lander", 2021, "Diesel", 5);
console.log(myCar2);

let myCar3 = new Car1("Mercedes Benz", "CLK", 2018, "Hybrid", 3);
console.log(myCar3);

function Truck(make, model, year, payloadCapacity, cubicCapacity) {
  Vehicle.call(this, make, model, year);
  this.payloadCapacity = payloadCapacity;
  this.cubicCapacity = cubicCapacity;
}

let myCar_1 = new Car("Citroen", "C3", 2016, "Diesel");
console.log(myCar_1);

let myTruck = new Truck("Ford", "F150", 2021, "1000 lbs", 3000);
console.log(myTruck);
