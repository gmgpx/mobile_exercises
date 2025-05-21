import { View, Text, Image, StyleSheet } from "react-native";

export default function Ex1() {
  return (
    <View style={styles.container}>
      <Image />
      <Text style={styles.name}>Gustavo Monteiro</Text>
      <Text style={styles.role}>Software Engineer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center",    
    backgroundColor: "indigo",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  role: {
    fontSize: 18,
    color: "white",
  },
});
