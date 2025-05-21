import { View, Text, Image, StyleSheet } from "react-native";

export default function Ex2() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/158373467?v=4' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Gustavo Monteiro</Text>
        <Text style={styles.role}>Software Engineer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center",    
    backgroundColor: "#f2f2f2",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12, 
    padding: 20,
    alignItems: "center",
    elevation: 5, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  role: {
    fontSize: 18,
    color: "gray",
  },
});
