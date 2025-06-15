import { useCallback, useEffect, useState } from "react";
import { asyncStorageTaskRepository } from "../../data/local/AsyncStorageTaskRepository";
import { Task } from "../../domain/entities/Task";
import { getAllTasks } from "../../domain/use-cases/getAllTasks";

/**
 * 🧠 useTasksController
 * Manages task logic for the UI.
 * Handles loading, error, and task state.
 *
 * / Maneja la lógica de tareas para la UI.
 * / Controla estado de carga, errores y tareas.
 */

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]); // List of tasks / Lista de tareas
  const [loading, setLoading] = useState(true); // Loading status / Estado de carga
  const [error, setError] = useState<string | null>(null); // Error message / Mensaje de error

  const loadTasks = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getAllTasks(asyncStorageTaskRepository);
      setTasks(data);
      setError(null); // Clear previous error / Limpiar errores anteriores
    } catch (err) {
      console.error("Failed to load tasks", err); // Debug log / Registro de error
      setError("Failed to load tasks."); // User-friendly message / Mensaje para el usuario
    } finally {
      setLoading(false); // Always stop loading / Siempre detener carga
    }
  }, []);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return { tasks, loading, error, reload: loadTasks };
  // Expose reload for retry / Exponer reload para reintentos
};
