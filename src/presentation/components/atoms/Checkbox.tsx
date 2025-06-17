import { Checkbox as ExpoCheckbox } from "expo-checkbox";
import { StyleSheet, ViewStyle } from "react-native";
import { Color } from "../../theme/colors";

interface Props {
  value: boolean;
  onValueChange: (newValue: boolean) => void;
  style?: ViewStyle;
}

export const Checkbox = ({ value, onValueChange, style }: Props) => {
  return (
    <ExpoCheckbox
      value={value}
      onValueChange={onValueChange}
      color={value ? Color.green : Color.black}
      style={[styles.checkbox, style]}
    />
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  checkbox: {
    height: 21,
    width: 21,
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: Color.black,
  },
});
