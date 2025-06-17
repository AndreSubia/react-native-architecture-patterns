import { Text as RNText, StyleSheet, TextStyle } from "react-native";
import { Color, ColorName } from "../../theme/colors";

const Typography = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "black",
  },
  titleBold: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  body: {
    fontSize: 16,
    fontWeight: "black",
  },
});

type TypographyType = "title" | "titleBold" | "button" | "body";

type Props = {
  type?: TypographyType;
  color?: ColorName;
} & RNText["props"];

export const Text = ({
  style,
  type = "body",
  color = "black",
  ...props
}: Props) => {
  return (
    <RNText style={[colorStyles[color], Typography[type], style]} {...props} />
  );
};

const colorStyles = StyleSheet.create({
  ...Object.keys(Color).reduce(
    (acc, colorName) =>
      ({
        ...acc,

        [colorName as ColorName]: {
          color: Color[colorName as ColorName],
        },
      }) as const,
    {} as Record<ColorName, TextStyle>,
  ),
});

export default Text;
