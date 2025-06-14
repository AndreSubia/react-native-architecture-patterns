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

// ❌ Mutating the original array (incorrect)
original.push(4);

// ✅ Creating a new array with the added element
const newArray = [...original, 4];

const obj = { name: 'André', age: 28 };

// ❌ Mutating the original object (incorrect)
obj.age = 29;

// ✅ Creating a new object with updated property
const newObj = { ...obj, age: 29 };
