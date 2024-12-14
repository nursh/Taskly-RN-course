import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Shopping list' }} />
      <Stack.Screen name="counter" options={{ title: 'Counter' }} />
      <Stack.Screen name="idea" options={{ title: 'Idea' }} />
    </Stack>
  )
}