import { Task } from "../../domain/entities/Task";
import { TaskRepository } from "../../domain/repositories/TaskRepository";

export const SupabaseTaskRepository: TaskRepository = {
  async getAllTasks(): Promise<Task[]> {
    // Fetch tasks
    // Obtener tareas
    return [];
  },

  async addTask(task: Task): Promise<void> {
    // Add a new task
    // Agregar una nueva tarea
  },

  async updateTask(task: Task): Promise<void> {
    // Update a task
    // Actualizar una tarea
  },
};
