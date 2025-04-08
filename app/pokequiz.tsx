import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import axios from 'axios';

interface Pokemon {
  name: string;
  image: string; // URL do GIF animado
}

export default function Pokequiz() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [correctAnswer, setCorrectAnswer] = useState<string>('');
  const [score, setScore] = useState<number>(0);

  // Função para buscar um Pokémon aleatório
  const fetchPokemon = async () => {
    const randomId = Math.floor(Math.random() * 151) + 1; // Limitado aos 151 primeiros Pokémon
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const data = response.data;

    // Pokémon correto com GIF animado da geração V
    const correctPokemon: Pokemon = {
      name: data.name,
      image: data.sprites.versions['generation-v']['black-white'].animated.front_default || data.sprites.front_default, // Fallback para sprite estático
    };
    setPokemon(correctPokemon);
    setCorrectAnswer(data.name);

    // Gerar opções de resposta (incluindo a correta)
    const allOptions: string[] = [data.name];
    while (allOptions.length < 4) {
      const randomOptionId = Math.floor(Math.random() * 151) + 1;
      const optionResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomOptionId}`);
      const optionName = optionResponse.data.name;
      if (!allOptions.includes(optionName)) {
        allOptions.push(optionName);
      }
    }
    // Embaralhar as opções
    const shuffledOptions: string[] = allOptions.sort(() => Math.random() - 0.5);
    setOptions(shuffledOptions);
  };

  // Carregar o primeiro Pokémon ao iniciar
  useEffect(() => {
    fetchPokemon();
  }, []);

  // Verificar resposta
  const checkAnswer = (selectedOption: string) => {
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
      alert('Correto!');
    } else {
      alert(`Errado! O correto era ${correctAnswer}`);
    }
    fetchPokemon(); // Carregar próxima pergunta
  };

  if (!pokemon) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.score}>Pontuação: {score}</Text>
      <Image source={{ uri: pokemon.image }} style={styles.image} />
      <Text style={styles.question}>Qual é este Pokémon?</Text>
      {options.map((option, index) => (
        <Button key={index} title={option} onPress={() => checkAnswer(option)} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  score: {
    fontSize: 20,
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
  },
});