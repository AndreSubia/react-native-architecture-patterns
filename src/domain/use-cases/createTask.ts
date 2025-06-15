/**
 * ✅ Create Task Use Case
 *
 * This function encapsulates the business rule for creating a new task.
 * It assigns a unique ID and initializes the task with default values.
 *
 * Esta función encapsula la regla de negocio para crear una nueva tarea.
 * Asigna un ID único e inicializa la tarea con valores por defecto.
 */

import { v4 as uuidv4 } from "uuid";
import { Task } from "../entities/Task";

/**
 * Creates a new Task instance / Crea una nueva instancia de Task.
 *
 * @param title - The title or description of the task / El título o descripción de la tarea
 * @returns A fully initialized Task object / Un objeto Task completamente inicializado
 *
 */

export const createTask = (title: string): Task => {
  return {
    id: uuidv4(), // Generates a unique ID  / Genera un ID único
    title, // Title provided by user / Título provisto por el usuario
    completed: false, // Default value          / Valor por defecto (no completada)
  };
};
