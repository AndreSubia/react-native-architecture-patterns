/**
 * ✅ Pure Functions
 *
 * - A pure function always returns the same output given the same input.
 * - It has no side effects (does not modify external state).
 *
 * ✅ Funciones Puras
 *
 * - Una función pura siempre retorna la misma salida para la misma entrada.
 * - No tiene efectos secundarios (no modifica estados externos).
 */

// Pure function example
export const add = (a: number, b: number): number => a + b;

// Impure function example (modifies external state)
let total = 0;
export const addToTotal = (num: number): number => {
  total += num;
  return total;
};
