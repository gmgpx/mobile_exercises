import { View, Text, TouchableOpacity } from "react-native";
import '../styles/global.css'

export default function Index({ navigation }: { navigation: any }) {
  const buttons = [
    { title: "Exercício 1", screen: "ex1" },
    { title: "Exercício 2", screen: "ex2" },
    { title: "Exercício 3", screen: "ex3" },
    { title: "Exercício 4", screen: "ex4" },
    { title: "Exercício 5", screen: "ex5" },
    { title: "Exercício 6", screen: "ex6" },
    { title: "Exercício 7", screen: "ex7" },
    { title: "Exercício 8", screen: "ex8" },
    { title: "Exercício 9", screen: "ex9" },
    { title: "Login", screen: "ex_login" },
    { title: "Perfil", screen: "ex_perfil" },
    { title: "To Do List", screen: "ex_todo" },
    { title: "Pokequiz", screen: "Pokequiz" },
  ];

  return (
    <View className="flex-1 justify-center items-center px-8 bg-gray-100">
      <Text className="text-4xl font-bold text-zinc-800 mb-4 text-center">
        Lista de Atividades      
      </Text>

      <View className="w-full gap-4">
        {buttons.map((btn, index) => (
          <TouchableOpacity
            key={index}
            className="bg-blue-500 rounded-full p-2 items-center"
            onPress={() => navigation.navigate(btn.screen)}
          >
            <Text className="text-white text-xl font-semibold">{btn.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}