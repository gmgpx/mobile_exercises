import { View, Text, TouchableOpacity } from "react-native";

export default function Index({ navigation }: { navigation: any }) {
  const buttons = [
    { title: "Exercício 1", screen: "ex1" },
    { title: "Exercício 2", screen: "ex2" },
    { title: "Exercício 3", screen: "ex3" },
    { title: "Login", screen: "ex_login" },
    { title: "Perfil", screen: "ex_perfil" },
    { title: "To Do List", screen: "ex_todo" },
    { title: "Pokequiz", screen: "Pokequiz" },
  ];

  return (
    <View className="flex-1 justify-center items-center px-8 bg-gray-100">
      <Text className="text-4xl font-bold text-zinc-800 mb-8 text-center">
        Bem-vindo      
      </Text>

      <View className="w-full gap-4">
        {buttons.map((btn, index) => (
          <TouchableOpacity
            key={index}
            className="bg-blue-500 rounded-full py-4 px-8 items-center"
            onPress={() => navigation.navigate(btn.screen)}
          >
            <Text className="text-white text-xl font-semibold">{btn.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
