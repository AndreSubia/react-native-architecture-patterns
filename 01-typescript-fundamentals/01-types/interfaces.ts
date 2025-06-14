/**
 * ✅ Interfaces Basics
 *
 * This example defines an interface `Person` to describe the shape of an object.
 * - Interfaces ensure the object has the required properties with correct types.
 * - Optional properties are marked with `?`.
 * - Functions can use interfaces to enforce argument types.
 *
 * In this case, `greeter` expects a `Person` and returns a greeting string.
 *
 * ✅ Conceptos básicos de interfaces
 * 
 * Este ejemplo define una interfaz `Person` para describir la forma de un objeto.
 * - Las interfaces garantizan que el objeto tenga las propiedades requeridas con tipos correctos.
 * - Las propiedades opcionales se marcan con `?`.
 * - Las funciones pueden usar interfaces para exigir tipos en los argumentos.
 *
 * En este caso, `greeter` espera un `Person` y devuelve un saludo como cadena.
 */

interface Person {
  firstName: string;
  lastName: string;
  age?: number; // Optional / Opcional
}

function greeter(person: Person) {
  return `Hello, ${person.firstName} ${person.lastName}`;
}

const user = { firstName: "André", lastName: "Subia" };
console.log(greeter(user));

/**
 * ✅ Function Interfaces
 * 
 * You can define the shape of a function using an interface.
 *
 * ✅ Interfaces de funciones
 * 
 * Puedes definir la forma de una función usando una interfaz.
 */

interface AddFn {
  (a: number, b: number): number;
}

const add: AddFn = (x, y) => x + y;

console.log(add(3, 7)); // 10

/**
 * ✅ Readonly Properties
 *
 * Use `readonly` to make a property immutable after initialization.
 *
 * ✅ Propiedades de solo lectura
 * 
 * Usa `readonly` para hacer una propiedad inmutable después de ser inicializada.
 */

interface Car {
  readonly brand: string;
  model: string;
}

const myCar: Car = { brand: "Toyota", model: "Corolla" };
myCar.model = "Yaris"; // ✅ allowed
// car.brand = "Honda"; // ❌ Error: brand is readonly

/**
 * ✅ Interface Inheritance
 *
 * Use `extends` to create a new interface that inherits from another.
 *
 * ✅ Herencia de interfaz
 * 
 * Usa `extends` para crear una nueva interfaz que hereda de otra.
 */

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  name: "Toby",
  breed: "Golden Retriever",
};

/**
 * ✅ Interface vs. ype
 *
 * Interfaces and type aliases are both used to define the shape of objects,
 * but they have some differences in usage and capabilities.
 *
 * Las interfaces y los alias de tipo se usan para definir la forma de los objetos,
 * pero tienen algunas diferencias en su uso y capacidades.
 */

// ✅ Interface: used mainly for object structures
//  Interfaz: se utiliza principalmente para estructuras de objetos
interface UserInterface {
  name: string;
  age: number;
}

// ✅ Type alias: can represent unions, primitives, and more
//  Alias ​​de tipo: puede representar uniones, tipos primitivos y más
type UserType = {
  name: string;
  age: number;
};

// ✅ Usage is the same for both /  El uso es el mismo para ambos
const user1: UserInterface = { name: "Andre", age: 28 };
const user2: UserType = { name: "Andre", age: 28 };

/**
 * ✅ Type intersection / Intersección con types
 */
type AnimalType = {
  name: string;
};

type DogType = AnimalType & {
  breed: string;
};

const dog1: Dog = { name: "Firulais", breed: "Labrador" };
const dog2: DogType = { name: "Toby", breed: "Poodle" };

/**
 * ✅ Only possible with type aliases / Solo es posible con alias de tipo
 */
type Status = "loading" | "success" | "error";

function showStatus(status: Status) {
  console.log(`Status: ${status}`);
}

showStatus("loading"); // Status: loading

// ❌ Invalid
// interface Score = number; // ❌ No permitido

// ✅ Valid
type Score = number;
const points: Score = 95;
