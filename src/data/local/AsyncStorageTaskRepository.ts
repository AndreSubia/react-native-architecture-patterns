import AsyncStorage from "@react-native-async-storage/async-storage";
import { Task } from "../../domain/entities/Task";
import { TaskRepository } from "../../domain/repositories/TaskRepository";

/**
 * 💾 AsyncStorage Task Repository
 *
 * This is a concrete implementation of the TaskRepository interface using AsyncStorage.
 * By adhering to the TaskRepository contract, we ensure that our domain logic remains
 * decoupled from the data source implementation.
 *
 *  👉 If you ever want to switch to a remote API (e.g. Supabase), you only need to
 * create a new implementation of the same interface (TaskRepository), without changing
 * the business logic or use cases.
 *
 * See: src/data/remote/SupabaseTaskRepository.ts
 *
 *
 * 💾 Repositorio de tareas usando AsyncStorage
 *
 * Esta es una implementación concreta de la interfaz TaskRepository utilizando AsyncStorage.
 * Al seguir el contrato de TaskRepository, garantizamos que nuestra lógica de dominio se mantenga
 * desacoplada de la implementación de la fuente de datos.
 *
 * 👉 Si en algún momento deseas cambiar a una API remota (por ejemplo, Supabase),
 * solo necesitas crear una nueva implementación de la misma interfaz (TaskRepository),
 * sin modificar la lógica de negocio ni los casos de uso.
 *
 * Ver: src/data/remote/SupabaseTaskRepository.ts
 */

const TASKS_KEY = "TASKS";

export const asyncStorageTaskRepository: TaskRepository = {
  async getAllTasks(): Promise<Task[]> {
    try {
      const json = await AsyncStorage.getItem(TASKS_KEY);
      return json ? JSON.parse(json) : [];
    } catch (e) {
      console.error("Failed to load tasks:", e);
      return [];
    }
  },

  async addTask(task: Task): Promise<void> {
    const current = await asyncStorageTaskRepository.getAllTasks();
    const updated = [...current, task];
    await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(updated));
  },

  async updateTask(task: Task): Promise<void> {
    const current = await asyncStorageTaskRepository.getAllTasks();
    const updated = current.map((t) => (t.id === task.id ? task : t));
    await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(updated));
  },
};
