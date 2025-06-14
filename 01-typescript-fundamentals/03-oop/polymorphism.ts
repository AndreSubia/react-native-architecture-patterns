/**
 * ✅ Polymorphism in TypeScript
 * 
 * Polymorphism means that different classes can share the same method names but behave differently.
 * 
 * This allows for flexible and reusable code.
 */

/**
 * ✅ Polimorfismo en TypeScript
 * 
 * El polimorfismo significa que diferentes clases pueden compartir los mismos nombres de métodos pero comportarse diferente.
 * 
 * Esto permite un código flexible y reutilizable.
 */

class Shape {
    area(): number {
        return 0;
    }
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Square extends Shape {
    constructor(private side: number) {
        super();
    }

    area(): number {
        return this.side * this.side;
    }
}

// Example: calculate areas
const shapes: Shape[] = [new Circle(3), new Square(4)];

shapes.forEach(shape => {
    console.log(shape.area()); // outputs area for each shape
});


/**
 * ✅ Abstract classes and methods
 * 
 * Abstract classes cannot be instantiated directly.
 * They can contain abstract methods that subclasses must implement.
 */

/**
 * ✅ Clases y métodos abstractos
 * 
 * Las clases abstractas no pueden ser instanciadas directamente.
 * Pueden contener métodos abstractos que las subclases deben implementar.
 */

abstract class Vehicle {
    constructor(public brand: string) { }

    // Abstract method (virtual function) - no implementation
    abstract move(distance: number): void;

    // Concrete method
    describe() {
        console.log(`This is a vehicle of brand ${this.brand}`);
    }
}

class Car extends Vehicle {
    move(distance: number): void {
        console.log(`${this.brand} car moved ${distance} meters.`);
    }
}

class Bicycle extends Vehicle {
    move(distance: number): void {
        console.log(`${this.brand} bicycle moved ${distance} meters.`);
    }
}

// Usage
const car = new Car("Toyota");
car.describe();  // Output: This is a vehicle of brand Toyota
car.move(50);    // Output: Toyota car moved 50 meters.

const bike = new Bicycle("Giant");
bike.describe(); // Output: This is a vehicle of brand Giant
bike.move(15);   // Output: Giant bicycle moved 15 meters.

// const v = new Vehicle("Generic"); // ❌ Error: Cannot create instance of abstract class
