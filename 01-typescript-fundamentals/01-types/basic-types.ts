/**
 * ✅ Basic Types in TypeScript
 *
 * This code demonstrates fundamental TypeScript types:
 * - Boolean, Number (including decimal, hex, binary, octal)
 * - String
 * - Arrays (two syntax styles)
 * - Tuples with fixed types
 * - Enums for named constants
 * - Any type (dynamic, avoid if possible)
 * - Void for functions without return
 * - Null and Undefined values
 * - Never for functions that never return (e.g., throw errors)
 *
 * ✅ Tipos básicos en TypeScript
 * 
 * Este código muestra los tipos fundamentales en TypeScript:
 * - Booleano, Número (decimal, hexadecimal, binario, octal)
 * - Cadena de texto (String)
 * - Arrays (dos formas de sintaxis)
 * - Tuplas con tipos fijos
 * - Enums para constantes con nombre
 * - Tipo Any (dinámico, evitar si es posible)
 * - Void para funciones sin valor de retorno
 * - Null y Undefined
 * - Never para funciones que nunca retornan (ejemplo: lanzan errores)
 */

// Boolean
const isDone: boolean = false;

// Number
const decimal: number = 6;
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;

// String
const message: string = "Hi";

// Array
const list1: number[] = [1, 2, 3];
const list2: Array<number> = [1, 2, 3];

// Tuple (array with strict types)
const tuple: [string, number] = ["hello", 10]; // Correct

// Enum
enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue",
}
const newColor: Color = Color.Green;

// Any (avoid using it)
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
let notSure: any = 4;
notSure = "maybe a string";

// Void (functions without return value)
function warnUser(): void {
  console.log("This is a warning message");
}

/**
 * ✅ Null vs Undefined
 *
 * `undefined`: A variable has been declared but not assigned a value yet.
 * `null`: A variable is explicitly assigned to have "no value".
 *
 * `undefined`: Una variable ha sido declarada pero aún no tiene un valor asignado.
 * `null`: Una variable fue asignada intencionalmente con "ningún valor".
 */

const u: undefined = undefined;
const n: null = null;

// ✅ Example: undefined (no assignment)
let a: undefined;
console.log(a); // undefined

// ✅ Example: null (explicit assignment)
const b: null = null;
console.log(b); // null

// Never (functions that never return)
function error(message: string): never {
  throw new Error(message);
}
