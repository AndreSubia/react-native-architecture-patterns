import { Task } from "../entities/Task";
import { TaskRepository } from "../repositories/TaskRepository";

/**
 * ✅ Use Case: Get all tasks
 * / Caso de uso: Obtener todas las tareas
 */

export const getAllTasks = async (
  repository: TaskRepository,
): Promise<Task[]> => {
  return await repository.getAllTasks();
};
