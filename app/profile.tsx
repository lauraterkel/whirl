import { StyleSheet } from "react-native";

export default function Profil() {
  return (
    <View
      style={styles.container}
    >
      <Text>Hej med dig, min ven</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F5F2",
  },
})
