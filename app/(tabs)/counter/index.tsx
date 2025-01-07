import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { theme } from "../../../theme";
import { registerForPushNotificationsAsync } from "../../../utils/registerForPushNotificationsAsync";
import * as Notifications from 'expo-notifications';

export default function CounterScreen() {

  const handleRequestPermission = async () => {
    const result = await registerForPushNotificationsAsync();
    console.log(result);
  }

  const scheduleNotification = async () => {
    const result = await registerForPushNotificationsAsync();
    if (result === 'granted') {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "I'm a notification from taskly"
        },
        trigger: {
          seconds: 15,
          type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL
        }
      });
    } else {
      Alert.alert(
        "Unable to schedule notification",
        "Enable the notifications permission for Expo Go in settings"
      )
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={handleRequestPermission}>
        <Text style={styles.buttonText}>Request Permission</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { marginTop: 10 }]} activeOpacity={0.8} onPress={scheduleNotification}>
        <Text style={styles.buttonText}>Schedule Notification</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: theme.colorBlack,
    padding: 12,
    borderRadius: 6
  },
  buttonText: {
    letterSpacing: 1,
    color: theme.colorWhite,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
});
