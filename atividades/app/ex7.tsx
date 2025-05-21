import { View, Text, Image, ScrollView } from 'react-native';

export default function ExPerfil() {
  return (
    <ScrollView className="flex-1 bg-white">

      <View className="h-40 bg-gray-200">
        <Image
          source={{ uri: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600' }}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>

      <View className="ml-12 -mt-12">
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/158373467?v=4' }}
          className="w-24 h-24 rounded-full border-4 border-white"
        />
      </View>

      <View className="items-start ml-12 mt-4">
        <Text className="text-xl font-bold text-gray-800">Gustavo Monteiro</Text>
        <Text className="text-gray-600 italic">Desenvolvedor Full-Stack</Text>
      </View>

      <View className="flex-row justify-around mt-6 px-6">
        <View className="items-center">
          <Text className="text-lg font-semibold text-gray-800">152</Text>
          <Text className="text-sm text-gray-500">Posts</Text>
        </View>
        <View className="items-center">
          <Text className="text-lg font-semibold text-gray-800">12K</Text>
          <Text className="text-sm text-gray-500">Seguidores</Text>
        </View>
        <View className="items-center">
          <Text className="text-lg font-semibold text-gray-800">1.1K</Text>
          <Text className="text-sm text-gray-500">Seguindo</Text>
        </View>
      </View>
    </ScrollView>
  );
}