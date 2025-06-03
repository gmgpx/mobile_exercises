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
      const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en');
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
          <Text style={styles.factText}>ID: {fact.id}</Text>
          <Text style={styles.factText}>Fact: {fact.text}</Text>
          <Text style={styles.factText}>Source : {fact.source}</Text>
          <Text style={styles.factText}>URL: {fact.source_url}</Text>
          <Text style={styles.factText}>Language: {fact.language}</Text>
          <Text style={styles.factText}>Link: {fact.permalink}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  title: { fontSize: 32, textAlign: 'center', marginBottom: 40, color: 'royalblue' },
  loader: { marginTop: 24 },
  factBox: { marginTop: 24, backgroundColor: 'snow', padding: 16, borderRadius: 16 },
  factText: { fontSize: 16, marginVertical: 8, textAlign: 'center' },
});
