import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './index';  
import Ex1 from './ex1'; 
import Pokequiz from './pokequiz'; 


const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Ex1" component={Ex1} />
        <Stack.Screen name="Pokequiz" component={Pokequiz} />
      </Stack.Navigator>
  );
}