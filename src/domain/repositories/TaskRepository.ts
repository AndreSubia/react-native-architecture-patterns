import { Task } from "../entities/Task";

/**
 * Interface for task data source
 * / Interfaz para fuente de datos de tareas
 */

export interface TaskRepository {
  getAllTasks(): Promise<Task[]>;
}
