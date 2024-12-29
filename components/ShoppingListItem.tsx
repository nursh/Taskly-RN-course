import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign'
import { theme } from "../theme";

type Props = {
  name: string;
  isCompleted?: boolean;
  onDelete: () => void;
};

export function ShoppingListItem({ name, isCompleted, onDelete }: Props) {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to delete ${name}`,
      "it will be gone for good",
      [
        {
          text: "Yes",
          onPress: () => onDelete(),
          style: "destructive",
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]
    );
  };

  return (
    <>
      <View
        style={[
          styles.itemContainer,
          isCompleted ? styles.completedContainer : undefined,
        ]}
      >
        <Text
          style={[
            styles.itemText,
            isCompleted ? styles.completedText : undefined,
          ]}
        >
          {name}
        </Text>
        <TouchableOpacity
          onPress={handleDelete}
          activeOpacity={0.8}
        >
          <AntDesign name="closecircle" size={24} color={isCompleted ? theme.colorGrey : theme.colorRed} />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colorCerulean,
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  completedContainer: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorLightGrey,
  },
  itemText: {
    fontSize: 18,
    fontWeight: "200",
  },
  completedText: {
    textDecorationLine: "line-through",
    textDecorationColor: theme.colorGrey,
    color: theme.colorGrey,
  },
});
