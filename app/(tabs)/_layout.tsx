import { Tabs } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function TabLayout() {

  return (
    <Tabs>
      <Tabs.Screen name="index" options={{
        title: 'Shopping list',
        tabBarIcon: ({ color, size }) => <Feather name="list" size={size} color={color} />
      }} />
      <Tabs.Screen name="counter" options={{
        title: 'Counter',
        headerShown: false,
        tabBarIcon: ({ color, size }) => <Feather name="clock" size={size} color={color} />
      }} />
      <Tabs.Screen name="idea" options={{
        title: 'Idea',
        tabBarIcon: ({ color, size }) => <FontAwesome5 name="lightbulb" size={size} color={color} />
      }} />
    </Tabs>
  )
}