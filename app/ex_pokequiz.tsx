import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import axios from 'axios';

interface Pokemon {
  name: string;
  image: string;
}

export default function ExPokequiz() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [correctAnswer, setCorrectAnswer] = useState<string>('');
  const [score, setScore] = useState<number>(0);

  const fetchPokemon = async () => {
    const randomId = Math.floor(Math.random() * 151) + 1;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const data = response.data;

    const correctPokemon: Pokemon = {
      name: data.name,
      image: data.sprites.versions['generation-v']['black-white'].animated.front_default || data.sprites.front_default, // Fallback para sprite estático
    };
    setPokemon(correctPokemon);
    setCorrectAnswer(data.name);

    const allOptions: string[] = [data.name];
    while (allOptions.length < 4) {
      const randomOptionId = Math.floor(Math.random() * 151) + 1;
      const optionResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomOptionId}`);
      const optionName = optionResponse.data.name;
      if (!allOptions.includes(optionName)) {
        allOptions.push(optionName);
      }
    }
    const shuffledOptions: string[] = allOptions.sort(() => Math.random() - 0.5);
    setOptions(shuffledOptions);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const checkAnswer = (selectedOption: string) => {
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
      alert('Correto!');
    } else {
      alert(`Errado! O correto era ${correctAnswer}`);
    }
    fetchPokemon();
  };

  if (!pokemon) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-xl">Carregando...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 items-center justify-center px-8">

      <Text className="text-4xl italic text-gray-700 mb-4">“Quem é este Pokémon?”</Text>

      <Image
        source={{ uri: pokemon.image }}
        className="w-60 h-60 mb-6"
        resizeMode="contain"
      />

      <Text className="text-2xl font-bold mb-4 text-gray-700">Pontuação: {score}</Text>

      <View className="w-full px-8 gap-4">
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            className="bg-blue-500 py-2 rounded-full items-center"
            onPress={() => checkAnswer(option)}
          >
            <Text className="text-white text-xl font-semibold capitalize">{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
