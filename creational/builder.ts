// Description: Builder Pattern
// The Builder pattern is a creational design pattern that lets you construct complex objects step by step. 
//The pattern allows you to produce different types and representations of an object using the same construction code.

// Product
class Car {
    make: string;
    model: string;
    engine: string;
    color: string;

    constructor(make: string, model: string, engine: string, color: string) {
        this.make = make;
        this.model = model;
        this.engine = engine;
        this.color = color;
    }
}
  
  // Builder
  class CarBuilder {
    make: string;
    model: string;
    engine: string;
    color: string;
  
    setMake(make: string): this {
      this.make = make;
      return this;
    }
  
    setModel(model: string): this {
      this.model = model;
      return this;
    }
  
    setEngine(engine: string): this {
      this.engine = engine;
      return this;
    }
  
    setColor(color: string): this {
      this.color = color;
      return this;
    }
  
    build(): Car {
      return new Car(this.make, this.model, this.engine, this.color)
    }
  }
  
  // Usage
  const car = new CarBuilder()
    .setMake('Toyota')
    .setModel('Camry')
    .setEngine('2.5L')
    .setColor('Blue')
    .build();
  
  console.log(car); // Output: Car { make: 'Toyota', model: 'Camry', engine: '2.5L', color: 'Blue' }