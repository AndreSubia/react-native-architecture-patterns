/**
 * ✅ Entities in Clean Architecture /  Entidades en Arquitectura Limpia
 *
 * Entities represent the core business logic of the application.
 * They are pure TypeScript, with no dependencies on frameworks or external libraries.
 *
 * Las entidades representan la lógica de negocio central de la aplicación.
 * Son código TypeScript puro, sin dependencias de frameworks o librerías externas.
 */

/**
 * ✅ User Entity Interface /  Interfaz de Entidad de Usuario
 *
 * This defines the structure of a User object.
 * Esto define la estructura de un objeto Usuario.
 */

export interface User {
  id: string;
  name: string;
  email: string;
  isEmailVerified: boolean;
}

/**
 * ✅ Factory Function to Create a User /  Función de Fábrica para Crear un Usuario
 *
 * This function ensures new users always start with isEmailVerified as false.
 * Esta función garantiza que los nuevos usuarios siempre comiencen con isEmailVerified en false.
 */

export function createUser(id: string, name: string, email: string): User {
  return {
    id,
    name,
    email,
    isEmailVerified: false,
  };
}

/**
 * ✅ Example Usage / Ejemplo de uso
 */

const newUser = createUser("1", "Andre", "andre@example.com");
console.log(newUser);

// Output:
// {
//   id: '1',
//   name: 'Andre',
//   email: 'andre@example.com',
//   isEmailVerified: false
// }
