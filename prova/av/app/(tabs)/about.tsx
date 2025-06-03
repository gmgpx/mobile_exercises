import { View, Text, StyleSheet } from 'react-native';

export default function PaginaB() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página B</Text>
      <Text style={styles.text}>Nome: Gustavo Monteiro</Text>
      <Text style={styles.text}>Email: gustavo@email.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, marginBottom: 20, color: 'royalblue' },
  title: { fontSize: 32, marginBottom: 40, color: 'royalblue' },
});
