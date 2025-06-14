/**
 * ✅ Type Aliases and Union Types
 *
 * This example demonstrates how to create:
 * - Type aliases with `type` to assign a name to a type or union of types.
 * - Union types (`string | number`) to allow multiple possible types.
 *
 * The function `printId` accepts either a string or a number as an ID.
 * The function `padLeft` adjusts a string’s padding using a string or number.
 * Type narrowing (`typeof`) is used to handle each case safely.
 *
 * Este ejemplo muestra cómo crear:
 * - Alias de tipos usando `type` para asignar un nombre a un tipo o a una unión de tipos.
 * - Tipos unión (`string | number`) para permitir múltiples tipos posibles.
 *
 * La función `printId` acepta un ID que puede ser string o number.
 * La función `padLeft` ajusta el padding de un string usando string o number.
 * Se utiliza *type narrowing* (`typeof`) para manejar cada caso de forma segura.
 */

// Type aliases
type ID = string | number;

function printId(id: ID) {
  console.log("Your ID is: " + id);
}

printId(101); // Your ID is: 101
printId("202"); // Your ID is: 202

// Type union
function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

console.log(padLeft("hello", 4)); // "    hello"
console.log(padLeft("world", ">> ")); // ">> world"
