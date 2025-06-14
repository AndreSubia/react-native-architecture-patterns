/**
 * ✅ Higher-Order Functions (HOF)
 *
 * A higher-order function is a function that takes another function as an argument
 * or returns a function as a result.
 *
 * ✅ Funciones de Orden Superior
 *
 * Una función de orden superior es una función que recibe otra función como argumento
 * o devuelve una función como resultado.
 */

// Example: function that takes a function as argument / función que toma una función como argumento
function mapArray(arr: number[], fn: (n: number) => number): number[] {
  const result: number[] = [];
  for (const n of arr) {
    result.push(fn(n));
  }
  return result;
}

const numbers = [1, 2, 3];
const doubled = mapArray(numbers, (n) => n * 2);
console.log(doubled); // [2, 4, 6]

// Example: function that returns another function / función que devuelve otra función
function createAdder(x: number): (y: number) => number {
  return function (y: number): number {
    return x + y;
  };
}

const addFive = createAdder(5);
console.log(addFive(3)); // 8
