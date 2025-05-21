import { View, Text, StyleSheet } from 'react-native';

export default function PaginaB() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página B</Text>
      <Text>Nome: Gustavo Monteiro</Text>
      <Text>Email: gustavo@email.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});
