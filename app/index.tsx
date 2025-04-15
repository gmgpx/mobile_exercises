<<<<<<< Updated upstream
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
=======
import { View, Text, Button, StyleSheet } from "react-native";

export default function Index({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Principal</Text>
      <View style={styles.buttonContainer}>
        <Button 
          title="Ir para Exercício 1"
          onPress={() => navigation.navigate('Ex1')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title="Ir para Exercício 2"
          onPress={() => navigation.navigate('Ex2')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title="Ir para Exercício 3"
          onPress={() => navigation.navigate('Ex3')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title="Ir para Exercício 4"
          onPress={() => navigation.navigate('Ex4')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title="Ir para Exercício 5"
          onPress={() => navigation.navigate('Ex5')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title="Ir para Exercício 6"
          onPress={() => navigation.navigate('Ex6')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title="Ir para Exercício 7"
          onPress={() => navigation.navigate('Ex7')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title="Ir para Exercício 8"
          onPress={() => navigation.navigate('Ex8')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title="Ir para Exercício 9"
          onPress={() => navigation.navigate('Ex9')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title="PokemonGPT"
          onPress={() => navigation.navigate('Pokequiz')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 20,
  },
});
>>>>>>> Stashed changes
