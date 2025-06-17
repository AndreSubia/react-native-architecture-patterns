import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          title: "To Do List",
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
}
