/**
 * ✅ Classes in TypeScript
 *
 * A class is a blueprint for creating objects with specific properties and methods.
 *
 * In Object-Oriented Programming (OOP), a class encapsulates data and behavior.
 *
 * ▶ Encapsulation allows restricting direct access to class members.
 */

/**
 * 🔐 Access Modifiers:
 * - public (default): accessible from anywhere
 * - private: accessible only within the class
 * - protected: accessible in the class and its subclasses
 */

/**
 * ✅ Clases en TypeScript
 *
 * Una clase es un plano para crear objetos con propiedades y métodos específicos.
 *
 * En la Programación Orientada a Objetos (POO), una clase encapsula datos y comportamiento.
 *
 * ▶ El encapsulamiento permite restringir el acceso directo a los miembros de una clase.
 */

/**
 * 🔐 Modificadores de acceso:
 * - public (por defecto): accesible desde cualquier parte
 * - private: accesible solo dentro de la clase
 * - protected: accesible en la clase y sus subclases
 */

class Person {
  public name: string; // ✅ Public property / Propiedad pública
  protected age: number; // 🔐 Protected property / Propiedad protegida
  private password: string; // 🔒 Private property / Propiedad privada

  constructor(name: string, age: number, password: string) {
    this.name = name;
    this.age = age;
    this.password = password;
  }

  // ✅ Public method
  greet(): string {
    return `Hello, my name is ${this.name}`;
  }

  // 🔐 Protected method
  protected getAge(): number {
    return this.age;
  }

  // 🔒 Private method
  private getPassword(): string {
    return this.password;
  }
}

const andre = new Person("André", 28, "1234");

console.log(andre.greet()); // ✅ OK
console.log(andre.name); // ✅ OK
// console.log(andre.age);       // ❌ Error: Property 'age' is protected
// console.log(andre.password);  // ❌ Error: Property 'password' is private
