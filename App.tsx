import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
      <View style={{
        borderBottomWidth: 1,
        borderBottomColor: "#1a759f",
        paddingHorizontal: 8,
        paddingVertical: 16
      }}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
