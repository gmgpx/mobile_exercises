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
