import { Task } from "../../domain/entities/Task";
import { TaskRepository } from "../../domain/repositories/TaskRepository";

export const SupabaseTaskRepository: TaskRepository = {
  async getAllTasks(): Promise<Task[]> {
    // Fetch tasks from local AsyncStorage
    // Obtener tareas desde AsyncStorage local
    return [];
  },

  async addTask(task: Task): Promise<void> {
    // Add a new task to storage
    // Agregar una nueva tarea al almacenamiento
  },

  async updateTask(task: Task): Promise<void> {
    // Update a task by ID in storage
    // Actualizar una tarea por ID en el almacenamiento
  },
};
