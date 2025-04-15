import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Ionicons, MaterialIcons, Entypo, FontAwesome } from "@expo/vector-icons";

const apps = [
  { id: "1", nome: "Mensagens", icone: <Ionicons name="chatbubble-outline" size={30} color="white" /> },
  { id: "2", nome: "Câmera", icone: <Ionicons name="camera-outline" size={30} color="white" /> },
  { id: "3", nome: "Galeria", icone: <Ionicons name="images-outline" size={30} color="white" /> },
  { id: "4", nome: "Música", icone: <Ionicons name="musical-notes-outline" size={30} color="white" /> },
  { id: "5", nome: "Navegador", icone: <Ionicons name="globe-outline" size={30} color="white" /> },
  { id: "6", nome: "Configurações", icone: <Ionicons name="settings-outline" size={30} color="white" /> },
];

export default function Ex6() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus Aplicativos</Text>
      <FlatList
        data={apps}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <View style={styles.appContainer}>
            <View style={styles.iconCircle}>{item.icone}</View>
            <Text style={styles.appNome}>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f2f2f2",
    flex: 1,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  lista: {
    justifyContent: "center",
  },
  appContainer: {
    alignItems: "center",
    flex: 1,
    marginBottom: 24,
  },
  iconCircle: {
    backgroundColor: "#4CAF50",
    borderRadius: 50,
    padding: 20,
    marginBottom: 6,
  },
  appNome: {
    fontSize: 14,
    textAlign: "center",
  },
});
