import { Task } from "../entities/Task";
import { TaskRepository } from "../repositories/TaskRepository";

/**
 * ✅ Create Task Use Case
 * Adds a new task to the repository.
 *
 * / Caso de uso: Crea una nueva tarea en el repositorio.
 */

export const createTask = async (
  repository: TaskRepository,
  task: Task,
): Promise<void> => {
  await repository.addTask(task);
};
