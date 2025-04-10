import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './index';  
import Ex1 from './ex1'; 
import Ex2 from './ex2'; 
import Ex3 from './ex3'; 
import Pokequiz from './pokequiz'; 


const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Ex1" component={Ex1} />
        <Stack.Screen name="Ex2" component={Ex2} />
        <Stack.Screen name="Ex3" component={Ex3} />
        <Stack.Screen name="Pokequiz" component={Pokequiz} />
      </Stack.Navigator>
  );
}