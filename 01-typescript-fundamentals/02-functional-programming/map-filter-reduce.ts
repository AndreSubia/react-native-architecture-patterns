/**
 * ✅ map, filter, reduce — Declarative, Functional Array Methods
 *
 * - map transforms each element in an array.
 * - filter selects elements based on a condition.
 * - reduce accumulates array elements into a single value.
 *
 * ✅ map, filter, reduce — Métodos Declarativos y Funcionales para Arrays
 *
 * - map transforma cada elemento en un array.
 * - filter selecciona elementos según una condición.
 * - reduce acumula los elementos del array en un solo valor.
 */

const numbers = [1, 2, 3, 4, 5];

export const doubled = numbers.map((n) => n * 2); // [2, 4, 6, 8, 10]

export const even = numbers.filter((n) => n % 2 === 0); // [2, 4]

export const sum = numbers.reduce((acc, curr) => acc + curr, 0); // 15
