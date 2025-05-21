import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';

interface Fact {
  id: string;
  text: string;
  source: string;
  source_url: string;
  language: string;
  permalink: string;
}

export default function PaginaC() {
  const [fact, setFact] = useState<Fact | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchFact = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=pt');
      const data: Fact = await response.json();
      setFact(data);
    } catch (error) {
      console.error('Erro ao buscar fato:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página C</Text>
      <Button title="Buscar Fato" onPress={fetchFact} />
      {loading && <ActivityIndicator size="large" style={styles.loader} />}
      {fact && !loading && (
        <View style={styles.factBox}>
          <Text style={styles.factText}>{fact.text}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  loader: { marginTop: 20 },
  factBox: { marginTop: 20, backgroundColor: '#eee', padding: 15, borderRadius: 10 },
  factText: { fontSize: 16, textAlign: 'center' },
});
