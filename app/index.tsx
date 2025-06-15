import React from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useTasks } from "../src/presentation/controller/useTasks";
import { taskPresenter } from "../src/presentation/presenter/taskPresenter";

/**
 * ✅ TaskListScreen
 * Renders a list of tasks from the controller and uses the presenter to format data.
 *
 * / Renderiza la lista de tareas desde el controlador y usa el presentador para formatear datos.
 */

export default function TaskListScreen() {
  const { tasks, loading, error, reload } = useTasks();

  if (loading) return <ActivityIndicator />;
  if (error)
    return (
      <View style={styles.centered}>
        <Text>{error}</Text>
        <Button title="Retry / Reintentar" onPress={reload} />
      </View>
    );

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>To Do List</Text>
      <FlatList
        data={tasks.map(taskPresenter)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.displayDescription}</Text>
            <Text>{item.done ? "✅ Done" : "🕒 Pending"}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    alignSelf: "center",
  },
  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
