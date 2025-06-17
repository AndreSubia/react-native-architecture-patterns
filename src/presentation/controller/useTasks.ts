import { useCallback, useEffect, useState } from "react";
import { asyncStorageTaskRepository } from "../../data/local/AsyncStorageTaskRepository";
import { Task } from "../../domain/entities/Task";
import { createTask as createTaskUseCase } from "../../domain/use-cases/createTask";
import { getAllTasks } from "../../domain/use-cases/getAllTasks";
import { toggleTaskStatus as toggleTaskStatusUseCase } from "../../domain/use-cases/toggleTaskStatus";

/**
 * 🧠 useTasks Hook – Controller for Task State and Actions
 *
 * This custom hook centralizes all logic related to task management:
 * loading, error handling, and mutation (create, toggle).
 *
 * Although responsibilities are already separated from the UI,
 * in a larger or more complex project it would be ideal to split this
 * into smaller hooks (e.g., useTasksReader and useTasksActions)
 * to follow the Single Responsibility Principle (SRP).
 *
 * ⚠️ However, it's important to avoid over-engineering.
 * Since this is a small project for learning purposes,
 * keeping everything in a single hook helps with simplicity and readability.
 *
 * 🧠 useTasks Hook – Controlador del estado y acciones de tareas
 *
 * Este hook personalizado centraliza toda la lógica relacionada con las tareas:
 * carga, manejo de errores y mutaciones (crear, alternar).
 *
 * Aunque ya está separado de la UI, en un proyecto más grande o complejo,
 * sería ideal dividirlo en hooks más pequeños (por ejemplo, useTasksReader y useTasksActions)
 * para seguir el Principio de Responsabilidad Única (SRP).
 *
 * ⚠️ Sin embargo, es importante evitar la sobreingeniería.
 * Como este es un proyecto pequeño con fines de aprendizaje,
 * mantener todo en un solo hook favorece la simplicidad y la legibilidad.
 */

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]); // List of tasks / Lista de tareas
  const [loading, setLoading] = useState(true); // Loading status / Estado de carga
  const [error, setError] = useState<string | null>(null); // Error message / Mensaje de error

  const loadTasks = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getAllTasks(asyncStorageTaskRepository);
      //const presented = data.map(taskPresenter); // ⬅️ aplicar aquí
      setTasks(data);
      setError(null); // Clear previous error / Limpiar errores anteriores
    } catch (err) {
      console.error("Failed to load tasks", err); // Debug log / Registro de error
      setError("Failed to load tasks."); // User-friendly message / Mensaje para el usuario
    } finally {
      setLoading(false); // Always stop loading / Siempre detener carga
    }
  }, []);

  const createTask = useCallback(
    async (task: Task) => {
      try {
        await createTaskUseCase(asyncStorageTaskRepository, task);
        await loadTasks(); // refresh list
      } catch (err) {
        setError("Failed to create task.");
      }
    },
    [loadTasks],
  );

  const toggleTaskStatus = useCallback(
    async (task: Task) => {
      try {
        await toggleTaskStatusUseCase(asyncStorageTaskRepository, task);
        await loadTasks(); // Refresh list
      } catch (err) {
        setError("Failed to update task.");
      }
    },
    [loadTasks],
  );

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return {
    tasks,
    loading,
    error,
    reload: loadTasks,
    createTask,
    toggleTaskStatus,
  };
  // Expose reload for retry / Exponer reload para reintentos
};
