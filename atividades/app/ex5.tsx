import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const dados = [
  {
    texto:
      "O universo é vasto e misterioso, repleto de galáxias, estrelas e planetas ainda desconhecidos.",
    imagem: "https://via.placeholder.com/300",
  },
  {
    texto:
      "Cientistas estudam o espaço há séculos, utilizando telescópios e sondas espaciais.",
    imagem: "https://via.placeholder.com/300",
  },
  {
    texto:
      "Explorações espaciais recentes ampliam nossa compreensão do cosmos e suas origens.",
    imagem: "https://via.placeholder.com/300",
  },
];

export default function Ex5() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Explorando o Universo</Text>

      {dados.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.texto}>{item.texto}</Text>
          <Image source={{ uri: item.imagem }} style={styles.imagem} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f2f2f2",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  texto: {
    fontSize: 16,
    marginBottom: 12,
    textAlign: "center",
  },
  imagem: {
    width: 300,
    height: 300,
    borderRadius: 8,
  },
});
