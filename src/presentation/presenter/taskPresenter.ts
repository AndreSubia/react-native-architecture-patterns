import { Task } from "../../domain/entities/Task";

/**
 * ✅ TaskViewModel
 *
 * This model is used by the UI. It’s based on the Task entity but may include formatting or extra data.
 *
 * Este modelo es usado por la UI. Está basado en la entidad Task pero puede incluir formato o datos extra.
 */

export interface TaskViewModel {
  id: string; // Task ID / ID de la tarea
  displayDescription: string; // Uppercase title / Título en mayúsculas
  done: boolean; // For UI checkbox / Para el checkbox de UI
}

/**
 * ✅ taskPresenter
 *
 * Converts a Task entity into a TaskViewModel for the UI layer.
 *
 * Convierte una entidad Task en un TaskViewModel para la capa de UI.
 */

export const taskPresenter = (task: Task): TaskViewModel => {
  return {
    id: task.id, // same as entity / igual que la entidad
    displayDescription: task.description.toUpperCase(), // uppercase title / título en mayúsculas
    done: task.completed, // same boolean field / mismo campo booleano
  };
};
