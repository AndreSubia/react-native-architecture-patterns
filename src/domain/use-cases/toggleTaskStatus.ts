import { Task } from "../entities/Task";
import { TaskRepository } from "../repositories/TaskRepository";

/**
 * ✅ Toggle Task Completion Status Use Case
 * Inverts the completed status of a task.
 *
 * / Caso de uso: Cambia el estado de completado de una tarea.
 */

export const toggleTaskStatus = async (
  repository: TaskRepository,
  task: Task,
): Promise<void> => {
  const updatedTask: Task = {
    ...task,
    completed: !task.completed, // Toggle value / Invertir valor
  };

  await repository.updateTask(updatedTask);
};
