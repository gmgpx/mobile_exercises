import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

interface Pokemon {
  name: string;
  image: string;
}

const pokemonGif = "https://media.giphy.com/media/DRfu7BT8ZK1uo/giphy.gif";

export default function ExPokequiz() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [correctAnswer, setCorrectAnswer] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [usedPokemon, setUsedPokemon] = useState<Set<number>>(new Set());
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);

  const fetchPokemon = async () => {
    try {
      let randomId = Math.floor(Math.random() * 151) + 1;
      while (usedPokemon.has(randomId)) {
        randomId = Math.floor(Math.random() * 151) + 1;
      }

      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      const data = response.data;

      const correctPokemon: Pokemon = {
        name: data.name,
        image: data.sprites.versions['generation-v']['black-white'].animated.front_default || data.sprites.front_default,
      };

      setPokemon(correctPokemon);
      setCorrectAnswer(data.name);
      setUsedPokemon(prev => new Set(prev).add(randomId));

      const allOptions: string[] = [data.name];
      while (allOptions.length < 4) {
        const optionId = Math.floor(Math.random() * 151) + 1;
        const optionResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${optionId}`);
        const optionName = optionResponse.data.name;
        if (!allOptions.includes(optionName)) {
          allOptions.push(optionName);
        }
      }

      setOptions(allOptions.sort(() => Math.random() - 0.5));
      setSelectedOption(null);
    } catch (error) {
      console.error("Erro ao buscar Pokémon:", error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const checkAnswer = (option: string) => {
    setSelectedOption(option);
    const isCorrect = option === correctAnswer;
    if (isCorrect) {
      const newScore = score + 1;
      setScore(newScore);
      if (newScore === 10) {
        setShowCelebration(true);
      } else {
        setTimeout(fetchPokemon, 1000);
      }
    } else {
      setScore(0);
      setTimeout(fetchPokemon, 1000);
    }
  };

  const resetGame = () => {
    setScore(0);
    setUsedPokemon(new Set());
    setShowCelebration(false);
    fetchPokemon();
  };

  if (!pokemon) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-xl text-gray-700">Carregando...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 items-center justify-center px-6 bg-white">
      <Text className="text-3xl font-bold italic text-gray-800 mb-4">“Quem é este Pokémon?”</Text>

      {showCelebration ? (
        <>
          <Image
            source={{ uri: pokemonGif }}
            className="w-60 h-60 mb-4"
            resizeMode="contain"
          />
          <Text className="text-4xl font-bold text-zinc-700 mb-2">Parabéns!</Text>
          <Text className="text-3xl font-bold text-zinc-600 mb-4">Você é um mestre Pokémon!</Text>

          <TouchableOpacity
            className="bg-blue-500 py-3 px-6 rounded-full"
            onPress={resetGame}
          >
            <Text className="text-white text-lg font-semibold">Jogar Novamente</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Image
            source={{ uri: pokemon.image }}
            className="w-72 h-72 mb-4"
            resizeMode="contain"
          />

          <Text className="text-xl font-semibold text-gray-600 mb-4">Pontuação: {score}</Text>

          <View className="w-full gap-4">
            {options.map((option, index) => {
              let bgColor = 'bg-blue-500';
              if (selectedOption && option === correctAnswer) {
                bgColor = 'bg-green-500';
              }

              return (
                <TouchableOpacity
                  key={index}
                  className={`${bgColor} p-4 rounded-full items-center`}
                  disabled={!!selectedOption}
                  onPress={() => checkAnswer(option)}
                >
                  <Text className="text-white text-xl capitalize font-semibold">{option}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </>
      )}
    </View>
  );
}
