import { createNativeStackNavigator } from '@react-navigation/native-stack';
import '../styles/global.css'
import Home from './index';  
import Ex1 from './ex_login'; 
import Ex2 from './ex_perfil'; 
import Ex3 from './ex_todo'; 
import Pokequiz from './ex_pokequiz'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Ex_login" component={Ex1} />
        <Stack.Screen name="Ex_perfil" component={Ex2} />
        <Stack.Screen name="Ex_To_Do" component={Ex3} />
        <Stack.Screen name="Pokequiz" component={Pokequiz} />
      </Stack.Navigator>
  );
}