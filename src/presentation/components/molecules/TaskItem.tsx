import { StyleSheet, View } from "react-native";
import { Task } from "../../../domain/entities/Task";
import { Color } from "../../theme/colors";
import Checkbox from "../atoms/Checkbox";
import Text from "../atoms/Text";

interface Props {
  task: Task;
  onToggle: () => void;
}

export const TaskItem = ({ task, onToggle }: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text color={task.completed ? "smoke" : "black"} type="body">
          {task.description}
        </Text>
      </View>
      <Checkbox value={task.completed} onValueChange={onToggle} />
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Color.frost,
  },
});
