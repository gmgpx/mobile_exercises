<<<<<<< Updated upstream
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
=======
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './index';  
import Ex1 from './ex1'; 
import Ex2 from './ex2'; 
import Ex3 from './ex3'; 
import Ex4 from './ex4'; 
import Ex5 from './ex5'; 
import Ex6 from './ex6'; 
import Ex7 from './ex7'; 
import Ex8 from './ex8'; 
import Ex9 from './ex9'; 
import Pokequiz from './pokequiz'; 


const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Ex1" component={Ex1} />
        <Stack.Screen name="Ex2" component={Ex2} />
        <Stack.Screen name="Ex3" component={Ex3} />
        <Stack.Screen name="Ex4" component={Ex4} />
        <Stack.Screen name="Ex5" component={Ex5} />
        <Stack.Screen name="Ex6" component={Ex6} />
        <Stack.Screen name="Ex7" component={Ex7} />
        <Stack.Screen name="Ex8" component={Ex8} />
        <Stack.Screen name="Ex9" component={Ex9} />
        <Stack.Screen name="Pokequiz" component={Pokequiz} />
      </Stack.Navigator>
  );
>>>>>>> Stashed changes
}