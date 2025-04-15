import { createNativeStackNavigator } from '@react-navigation/native-stack';
import '../styles/global.css'
import Home from './index';  
import Ex1 from './ex1'; 
import Ex2 from './ex2';
import Ex3 from './ex3'; 
import Exlogin from './ex_login'; 
import Experfil from './ex_perfil'; 
import Extodo from './ex_todo'; 
import Pokequiz from './ex_pokequiz'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ex1" component={Ex1} />
        <Stack.Screen name="ex2" component={Ex2} />
        <Stack.Screen name="ex3" component={Ex3} />
        <Stack.Screen name="ex_login" component={Exlogin} />
        <Stack.Screen name="ex_perfil" component={Experfil} />
        <Stack.Screen name="ex_todo" component={Extodo} />
        <Stack.Screen name="Pokequiz" component={Pokequiz} />
      </Stack.Navigator>
  );
}