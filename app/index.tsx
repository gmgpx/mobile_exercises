import { View, Text, TouchableOpacity } from "react-native";

export default function Index({ navigation }: { navigation: any }) {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100 px-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">
        Bem-vindo
      </Text>

      <TouchableOpacity
        className="bg-blue-500 px-6 py-3 rounded-lg mb-4"
        onPress={() => navigation.navigate("Ex_login")}
      >
        <Text className="text-white font-semibold">Tela de Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-green-500 px-6 py-3 rounded-lg mb-4"
        onPress={() => navigation.navigate("Ex_perfil")}
      >
        <Text className="text-white font-semibold">Tela de Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-yellow-500 px-6 py-3 rounded-lg mb-4"
        onPress={() => navigation.navigate("Ex_To_Do")}
      >
        <Text className="text-white font-semibold">To Do List</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-purple-500 px-6 py-3 rounded-lg"
        onPress={() => navigation.navigate("Pokequiz")}
      >
        <Text className="text-white font-semibold">Pokequiz</Text>
      </TouchableOpacity>

    </View>
  );
}
