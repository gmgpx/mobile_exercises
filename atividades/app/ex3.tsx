import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";


interface product {
  id: string;
  name: string;
  price: string;
}
const products = [
  {
    id: "1",
    name: "Notebook Dell XPS 13",
    price: "R$ 8.999,00",
  },
  {
    id: "2",
    name: "Smartphone Samsung Galaxy S23",
    price: "R$ 5.499,00",
  },
  {
    id: "3",
    name: "Fones de Ouvido Bluetooth Sony",
    price: "R$ 699,00",
  },
  {
    id: "4",
    name: "Monitor LG UltraWide 29\"",
    price: "R$ 1.799,00",
  },
  {
    id: "5",
    name: "Teclado Mecânico HyperX",
    price: "R$ 399,00",
  },
];

export default function Ex3() {
  const renderItem = ({ item }: {item: product}) => (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.preco}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.lista}
    />
  );
}

const styles = StyleSheet.create({
  lista: {
    padding: 16,
    backgroundColor: "#f2f2f2",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 12,
    borderRadius: 8,
    padding: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  imagem: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  preco: {
    fontSize: 14,
    color: "green",
  },
});
