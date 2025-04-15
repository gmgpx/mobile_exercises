import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Ex7() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.imgur.com/1n7f4U4.jpg" }} // imagem de capa (Sorocaba)
        style={styles.capa}
      />
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }} // avatar
          style={styles.avatar}
        />
      </View>
      <View style={styles.conteudo}>
        <Text style={styles.nome}>João Silva</Text>
        <Text style={styles.bio}>
          Desenvolvedor apaixonado por tecnologia e inovação. Sempre em busca de aprender mais!
        </Text>
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Meus Posts</Text>
            <Text style={styles.statValue}>5 Posts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Seguidores</Text>
            <Text style={styles.statValue}>230 Seguidores</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Seguindo</Text>
            <Text style={styles.statValue}>180 Seguindo</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  capa: {
    width: "100%",
    height: 150,
  },
  avatarContainer: {
    position: "absolute",
    top: 110,
    left: 20,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#fff",
    overflow: "hidden",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  conteudo: {
    marginTop: 60,
    paddingHorizontal: 20,
  },
  nome: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  bio: {
    fontSize: 14,
    color: "#333",
    marginBottom: 16,
  },
  stats: {
    flexDirection: "column",
    gap: 16,
  },
  statItem: {
    marginBottom: 8,
  },
  statLabel: {
    fontWeight: "bold",
  },
  statValue: {
    color: "#555",
  },
});
