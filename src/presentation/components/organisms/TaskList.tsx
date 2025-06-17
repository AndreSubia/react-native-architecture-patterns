import { FlatList, StyleSheet } from "react-native";
import { Task } from "../../../domain/entities/Task";
import { TaskItem } from "../molecules/TaskItem";

interface Props {
  tasks: Task[];
  onToggle: (task: Task) => void;
}

export const TaskList = ({ tasks, onToggle }: Props) => (
  <FlatList
    data={tasks}
    keyExtractor={(item) => item.id}
    contentContainerStyle={styles.listContent}
    renderItem={({ item }) => (
      <TaskItem task={item} onToggle={() => onToggle(item)} />
    )}
  />
);

export default TaskList;

const styles = StyleSheet.create({
  listContent: {
    paddingHorizontal: 16,
    flexDirection: "column-reverse",
  },
});
