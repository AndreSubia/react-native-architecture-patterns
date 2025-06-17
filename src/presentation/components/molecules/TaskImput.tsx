import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { Color } from "../../theme/colors";
import Text from "../atoms/Text";

interface Props {
  onSubmit: (description: string) => void;
}

export const TaskInput = ({ onSubmit }: Props) => {
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (!description.trim()) return;
    onSubmit(description.trim());
    setDescription(""); // Clear input after submit
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Write a task"
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        onSubmitEditing={handleAdd}
        returnKeyType="done"
      />
      <Text type="button" color="frequencyPurple" onPress={handleAdd}>
        Add
      </Text>
    </View>
  );
};

export default TaskInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
    marginHorizontal: 12,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: Color.smoke,
    borderRadius: 8,
    backgroundColor: Color.white,
    color: Color.black,
  },
});
