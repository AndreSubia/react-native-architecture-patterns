/**
 * ✅ Inheritance in TypeScript
 *
 * Inheritance allows a class to extend another class, reusing its properties and methods.
 * The child class can add new features or override existing ones.
 */

/**
 * ✅ Herencia en TypeScript
 *
 * La herencia permite que una clase extienda otra clase, reutilizando sus propiedades y métodos.
 * La clase hija puede añadir nuevas funcionalidades o sobreescribir las existentes.
 */

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number): void {
    console.log(`${this.name} moved ${distance} meters.`);
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Woof! 🐶");
  }
}

// Example
const dog = new Dog("Firulais");
dog.bark(); // "Woof! 🐶"
dog.move(10); // "Firulais moved 10 meters."
