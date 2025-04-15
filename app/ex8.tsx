import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function Ex8() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Postagem 1 */}
      <View style={styles.card}>
        <View style={styles.header}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/45.jpg" }}
            style={styles.avatar}
          />
          <Text style={styles.username}>Carlos Almeida</Text>
        </View>
        <Image
          source={{ uri: "https://i.imgur.com/X3BwlmX.jpg" }} // aurora boreal
          style={styles.postImage}
        />
        <Text style={styles.caption}>Aproveitando o fim de semana com a família!</Text>
      </View>

      {/* Postagem 2 */}
      <View style={styles.card}>
        <View style={styles.header}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/32.jpg" }}
            style={styles.avatar}
          />
          <Text style={styles.username}>Maria Oliveira</Text>
        </View>
        <Image
          source={{ uri: "https://i.imgur.com/Vi6NT7c.jpg" }} // trilha na montanha
          style={styles.postImage}
        />
        <Text style={styles.caption}>Uma tarde incrível em um lugar maravilhoso!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "#f0f0f0",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 8,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
  postImage: {
    width: "100%",
    height: 180,
    borderRadius: 8,
    marginBottom: 8,
  },
  caption: {
    fontSize: 14,
    color: "#333",
  },
});
