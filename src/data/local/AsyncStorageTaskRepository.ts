import AsyncStorage from "@react-native-async-storage/async-storage";
import { Task } from "../../domain/entities/Task";
import { TaskRepository } from "../../domain/repositories/TaskRepository";

/**
 * 💾 AsyncStorage implementation of TaskRepository
 * / Implementación de TaskRepository usando AsyncStorage
 */

const STORAGE_KEY = "TASKS";
//TODO: remove Test data
const TASKS: Task[] = [
  {
    id: "0",
    description: "Task 0",
    completed: false,
  },
  {
    id: "1",
    description: "Task 1",
    completed: true,
  },
  {
    id: "2",
    description: "Task 2",
    completed: false,
  },
  {
    id: "3",
    description: "Task 3",
    completed: true,
  },
];

export const asyncStorageTaskRepository: TaskRepository = {
  async getAllTasks(): Promise<Task[]> {
    try {
      const json = await AsyncStorage.getItem(STORAGE_KEY);
      return json ? JSON.parse(json) : TASKS;
    } catch (e) {
      console.error("Failed to load tasks:", e);
      return [];
    }
  },
};
