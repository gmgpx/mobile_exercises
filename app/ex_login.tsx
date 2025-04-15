import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert, Pressable } from "react-native";

export default function ExLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if (email === "Adm" && senha === "1234") {
      Alert.alert("Login realizado com sucesso!");
    } else {
      Alert.alert("Email ou senha incorretos.");
    }
  };

  return (
    <View className="flex-1 items-center justify-center bg-gray-100 px-8">

      <Text className="text-4xl font-semibold">Login</Text>

      <Text className="text-sm text-gray-500 mb-4">Preencha os campos abaixo com seus dados de acesso.</Text>

      <View className="w-full">
        <Text className="flex text-xl font-medium">Email</Text>

        <TextInput
          placeholder="Seu email aqui"
          placeholderTextColor="#cacaca"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          className="w-full h-12 px-4 mb-4 bg-white rounded-lg border border-gray-300"
        />
      </View>

      <View className="w-full">
        <Text className="text-xl font-medium">Senha</Text>

        <TextInput
          placeholder="Sua senha aqui"
          placeholderTextColor="#cacaca"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          className="w-full h-12 px-4 mb-8 bg-white rounded-lg border border-gray-300"
        />
      </View>

      <Pressable
        onPress={handleLogin}
        className="w-full h-12 bg-blue-500 rounded-lg items-center justify-center"
      >
        <Text className="text-white font-semibold text-xl">Entrar</Text>
      </Pressable>
    </View>
  );
}
