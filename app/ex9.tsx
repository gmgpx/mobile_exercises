import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5, Entypo } from "@expo/vector-icons";

export default function Ex9() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercício 10</Text>

      <TouchableOpacity style={styles.item}>
        <Ionicons name="notifications-outline" size={24} color="#333" />
        <Text style={styles.itemText}>Notificações</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Ionicons name="lock-closed-outline" size={24} color="#333" />
        <Text style={styles.itemText}>Privacidade</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <MaterialIcons name="security" size={24} color="#333" />
        <Text style={styles.itemText}>Segurança</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <FontAwesome5 name="language" size={20} color="#333" />
        <Text style={styles.itemText}>Idioma</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Entypo name="light-up" size={22} color="#333" />
        <Text style={styles.itemText}>Tema</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Ionicons name="person-circle-outline" size={24} color="#333" />
        <Text style={styles.itemText}>Conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f5f5f5",
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 1,
  },
  itemText: {
    marginLeft: 12,
    fontSize: 16,
    color: "#333",
  },
});
