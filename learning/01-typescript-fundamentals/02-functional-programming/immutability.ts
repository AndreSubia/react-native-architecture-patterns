/**
 * ✅ Immutability
 *
 * - Avoid changing (mutating) data directly.
 * - Instead, create new data structures with the updated values.
 *
 * ✅ Inmutabilidad
 *
 * - Evitar cambiar (mutar) datos directamente.
 * - En su lugar, crear nuevas estructuras de datos con los valores actualizados.
 */

const original = [1, 2, 3];

// ❌ Mutating the original array (incorrect) /  Mutando el arreglo original (incorrecto)
original.push(4);

// ✅ Creating a new array with the added element /  Creando un nuevo arreglo con el elemento agregado
const newArray = [...original, 4];

const obj = { name: "André", age: 28 };

// ❌ Mutating the original object (incorrect) /  Mutando el objeto original (incorrecto)
obj.age = 29;

// ✅ Creating a new object with updated property /  Creando un nuevo objeto con la propiedad actualizada
const newObj = { ...obj, age: 29 };
