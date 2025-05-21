import { View, Text, Image, StyleSheet } from 'react-native';

export default function PaginaA() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página A</Text>
      <Image
        source={{ uri: 'https://avatars.githubusercontent.com/u/158373467?v=4' }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  image: { width: 200, height: 200 },
});
