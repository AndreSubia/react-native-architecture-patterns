/**
 * ✅ Task Entity
 *
 * This represents a single task item.
 * It contains only the essential business-related properties.
 *
 * Esta entidad representa una tarea.
 * Contiene únicamente propiedades relacionadas al dominio.
 */

export interface Task {
  id: string; // Unique identifier  / Identificador único
  description: string; // Task description   / Descripción de la tarea
  completed: boolean; // Completion status  / Estado de completado
}
