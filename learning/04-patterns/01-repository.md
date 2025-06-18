# 🧱 Repository Pattern

## ✅ Overview

The Repository Pattern provides an abstraction layer between the data source and the domain layer.

> 🟦 It allows you to switch from one data source (e.g., AsyncStorage) to another (e.g., Supabase) without changing your business logic.

---

## 💡 Purpose / Propósito

**EN:** Decouples the domain logic from data access concerns.
**ES:** Desacopla la lógica del dominio del acceso a los datos.

---

## 🧪 Example / Ejemplo

```ts
// domain/repositories/TaskRepository.ts
export interface TaskRepository {
  getAllTasks(): Promise<Task[]>;
  addTask(task: Task): Promise<void>;
  updateTask(task: Task): Promise<void>;
}

// data/local/AsyncStorageTaskRepository.ts
export const asyncStorageTaskRepository: TaskRepository = {
  async getAllTasks() {
    // Fetch from AsyncStorage
  },
  async addTask(task) {
    // Add to AsyncStorage
  },
  async updateTask(task) {
    // Update in AsyncStorage
  },
};