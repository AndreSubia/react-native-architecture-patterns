/**
 * ✅ Promises in TypeScript
 *
 * Promises are used to handle asynchronous operations in JavaScript/TypeScript.
 * - A promise can be in one of 3 states: pending, fulfilled, or rejected.
 * - We use `.then()` to handle success, `.catch()` for errors,
 *   and `.finally()` to run code regardless of the result.
 *
 * ✅ Promesas en TypeScript
 *
 * Las promesas se usan para manejar operaciones asíncronas en JavaScript/TypeScript.
 * - Una promesa puede estar en uno de 3 estados: pendiente, cumplida o rechazada.
 * - Usamos `.then()` para manejar el éxito, `.catch()` para errores,
 *   y `.finally()` para ejecutar código sin importar el resultado.
 */

function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("✅ Data loaded successfully.");
      } else {
        reject("❌ Error loading data.");
      }
    }, 1000);
  });
}

fetchData()
  .then((data) => {
    console.log("THEN:", data);
  })
  .catch((error) => {
    console.error("CATCH:", error);
  })
  .finally(() => {
    console.log("FINALLY: Operation finished (success or failure).");
  });

/**
 * ✅ Async/Await
 *
 * We can use `async` and `await` to make asynchronous code easier to read.
 * Use `try/catch/finally` for better error handling.
 *
 * Podemos usar `async` y `await` para que el código asíncrono sea más fácil de leer.
 * Usamos `try/catch/finally` para un mejor manejo de errores.
 */

async function loadData() {
  try {
    const result = await fetchData();
    console.log("ASYNC/AWAIT:", result);
  } catch (error) {
    console.error("ASYNC/AWAIT ERROR:", error);
  } finally {
    console.log("ASYNC/AWAIT FINALLY: Cleanup logic can go here.");
  }
}

loadData();
