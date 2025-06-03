import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export default function PaginaC() {
  const [comment, setComment] = useState<Comment | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchComment = async () => {
    setLoading(true);
    try {
      const response = await axios.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
      const data = response.data[0]; 
      setComment(data);
    } catch (error) {
      console.error('Erro ao buscar comentário:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página C</Text>
      <Button title="Buscar comentário" onPress={fetchComment} />
      {loading && <ActivityIndicator size="large" style={styles.loader} />}
      {comment && !loading && (
        <View style={styles.Box}>
          <Text style={styles.Text}>ID: {comment.id}</Text>
          <Text style={styles.Text}>Nome: {comment.name}</Text>
          <Text style={styles.Text}>Email: {comment.email}</Text>
          <Text style={styles.Text}>Comentário: {comment.body}</Text>
        </View>      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  title: { fontSize: 32, textAlign: 'center', marginBottom: 40, color: 'royalblue' },
  loader: { marginTop: 24 },
  Box: { marginTop: 24, backgroundColor: 'snow', padding: 16, borderRadius: 16 },
  Text: { fontSize: 16, marginVertical: 8, textAlign: 'center' },
});