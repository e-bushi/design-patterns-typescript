//This is the delegate design pattern.
//It is a behavioral design pattern that allows an object to delegate a task to another object.

// Vehicle interface
interface Vehicle {
    speed: number;
    accelerate(amount: number): void;
    decelerate(amount: number): void;
    getSpeed(): number;
  }
  
  // Car class
  class Truck implements Vehicle {
    speed: number = 0;
    private numberOfSeats: number;
  
    constructor(numberOfSeats: number) {
      this.numberOfSeats = numberOfSeats;
    }
  
    accelerate(amount: number): void {
      this.speed += amount;
    }
  
    decelerate(amount: number): void {
      this.speed -= amount;
    }
  
    getSpeed(): number {
      return this.speed;
    }
  
    getNumberOfSeats(): number {
      return this.numberOfSeats;
    }
  }
  
  // Motorcycle class
  class Motorcycle implements Vehicle {
    speed: number = 0;
    private engineCC: number;
  
    constructor(engineCC: number) {
      this.engineCC = engineCC;
    }
  
    accelerate(amount: number): void {
      this.speed += amount;
    }
  
    decelerate(amount: number): void {
      this.speed -= amount;
    }
  
    getSpeed(): number {
      return this.speed;
    }
  
    getEngineCC(): number {
      return this.engineCC;
    }
  }
  
  // Usage
  const myTruck = new Truck(5);
  myTruck.accelerate(20);
  console.log(`Car speed: ${myTruck.getSpeed()} mph`); // Output: Car speed: 20 mph
  console.log(`Number of seats: ${myTruck.getNumberOfSeats()}`); // Output: Number of seats: 5
  
  const myMotorcycle = new Motorcycle(250);
  myMotorcycle.accelerate(30);
  console.log(`Motorcycle speed: ${myMotorcycle.getSpeed()} mph`); // Output: Motorcycle speed: 30 mph
  console.log(`Engine displacement: ${myMotorcycle.getEngineCC()} cc`); // Output: Engine displacement: 250 cc