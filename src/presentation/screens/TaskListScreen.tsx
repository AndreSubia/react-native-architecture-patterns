import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TaskInput from "../components/molecules/TaskImput";
import TaskList from "../components/organisms/TaskList";
import { useTasks } from "../controller/useTasks";
import { Color } from "../theme/colors";

/**
 * ✅ TaskListScreen
 * Renders a list of tasks from the controller and uses the presenter to format data.
 *
 * / Renderiza la lista de tareas desde el controlador y usa el presentador para formatear datos.
 */

const TaskListScreen = () => {
  const { tasks, loading, error, reload, createTask, toggleTaskStatus } =
    useTasks();

  const handleCreateTask = (desc: string) => {
    createTask({
      id: new Date().getTime().toString(),
      description: desc,
      completed: false,
    });
  };

  if (loading && tasks.length === 0) return <ActivityIndicator />;
  if (error)
    return (
      <View style={styles.centered}>
        <Text>{error}</Text>
        <Button title="Retry" onPress={reload} />
      </View>
    );

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <TaskInput onSubmit={handleCreateTask} />
      <TaskList tasks={tasks} onToggle={toggleTaskStatus} />
    </View>
  );
};

export default TaskListScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 16,
    backgroundColor: Color.white,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
