/**
 * ✅ Use Cases in Clean Architecture / Casos de uso en Arquitectura Limpia
 *
 * A use case represents a specific action or behavior in the application.
 * It orchestrates entities to fulfill business rules.
 *
 * Un caso de uso representa una acción o comportamiento específico en la aplicación.
 * Orquesta entidades para cumplir con las reglas del negocio.
 */

import { User, createUser } from "./02-entities";

/**
 * ✅ CreateUserUseCase with email validation /  Caso de uso CreateUserUseCase con validación de email
 *
 * This use case includes a basic rule: email must contain "@".
 * Este caso de uso incluye una regla básica: el email debe contener "@".
 */

export function createUserUseCase(name: string, email: string): User {
  // ✅ Business Rule: Email must contain '@'
  //  Regla de negocio: el email debe contener '@'

  if (!email.includes("@")) {
    throw new Error("Invalid email address / Dirección de email inválida");
  }

  const id = crypto.randomUUID();
  const user = createUser(id, name, email);

  return user;
}

/**
 * ✅ Example Usage / Ejemplo de uso
 */

try {
  const result = createUserUseCase("Andre", "andre@example.com");
  console.log(result);
} catch (error) {
  console.error(error);
}
