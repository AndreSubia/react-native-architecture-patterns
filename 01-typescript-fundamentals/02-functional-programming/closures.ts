/**
 * ✅ Closures
 * 
 * - A closure allows a function to access variables from an outer scope even after that scope has finished execution.
 * 
 * ✅ Closures (Clausuras)
 * 
 * - Una clausura permite que una función acceda a variables de un ámbito externo aunque ese ámbito ya haya terminado su ejecución.
 */

function makeCounter() {
    let count = 0;
    return () => {
        count++;
        return count;
    };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
