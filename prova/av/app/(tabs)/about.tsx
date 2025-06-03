import { View, Text, StyleSheet } from 'react-native';

export default function PaginaB() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre</Text>
      <Text style={styles.text}>Gustavo Monteiro</Text>
      <Text style={styles.text}>Análise e Desenvolvimento de Sistemas</Text>
      <Text style={styles.text}>Disciplina Desenvolvimento Mobile</Text>
      <Text style={styles.text}>03/06/2025</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, marginBottom: 20 },
  title: { fontSize: 32, marginBottom: 40, color: 'royalblue' },
});
