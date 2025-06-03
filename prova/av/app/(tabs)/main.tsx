import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const [savedCount, setSavedComment] = useState(0);

  useEffect(() => {
    countSavedComments();
  }, []);

  const fetchComment = async () => {
    setLoading(true);
    try {
      const response = await axios.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
      const data = response.data[Math.floor(Math.random() * response.data.length)];
      setComment(data);
    } catch (error) {
      console.error('Erro ao buscar comentário:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveComment = async () => {
    if (comment) {
      try {
        const stored = await AsyncStorage.getItem("savedComments");
        const comments = stored ? JSON.parse(stored) : [];
        comments.push(comment);
        await AsyncStorage.setItem("savedComments", JSON.stringify(comments));
        countSavedComments();
      } catch (error) {
        console.error('Erro ao salvar comentário:', error);
      }
    }
  };

  const countSavedComments = async () => {
    try {
      const stored = await AsyncStorage.getItem("savedComments");
      const comments = stored ? JSON.parse(stored) : [];
      setSavedComment(comments.length);
    } catch (error) {
      console.error('Erro ao contar comentários salvos:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página C</Text>
      <Text style={styles.title}>Total salvos: {savedCount}</Text>
      <Button title="Buscar comentário" onPress={fetchComment} />
      {loading && <ActivityIndicator size="large" style={styles.loader} />}
      {comment && !loading && (
        <TouchableOpacity style={styles.Box} onPress={saveComment}>
          <Text style={styles.Text}>ID: {comment.id}</Text>
          <Text style={styles.Text}>Nome: {comment.name}</Text>
          <Text style={styles.Text}>Email: {comment.email}</Text>
          <Text style={styles.Text}>Comentário: {comment.body}</Text>
          <Text style={styles.Text}>- Clique para salvar! -</Text>
        </TouchableOpacity>
      )}
    </View >
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  title: { fontSize: 32, textAlign: 'center', marginBottom: 40, color: 'royalblue' },
  loader: { marginTop: 24 },
  Box: { marginTop: 24, backgroundColor: 'snow', padding: 16, borderRadius: 16 },
  Text: { fontSize: 16, marginVertical: 8, textAlign: 'center' },
});