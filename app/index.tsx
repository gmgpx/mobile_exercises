import { View, Text, Button } from "react-native";

export default function Index({ navigation }: { navigation: any }) {
  return (
    <View>
      <Text>Bem vindo</Text>
      <Button 
        title="Ir para Exercício 1"
        onPress={() => navigation.navigate('Ex1')}
      />
      <Button 
        title="Pokequiz"
        onPress={() => navigation.navigate('Pokequiz')}
      />
    </View>
  );
}