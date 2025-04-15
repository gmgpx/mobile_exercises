import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './index';
import ex1 from './ex1';
import ex2 from './ex2';
import ex3 from './ex3';
import ex4 from './ex4';
import ex5 from './ex5';
import ex6 from './ex6';
import ex7 from './ex7';
import ex8 from './ex8';
import ex9 from './ex9';
import exlogin from './ex_login';
import experfil from './ex_perfil';
import extodo from './ex_todo';
import Pokequiz from './ex_pokequiz';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ex1" component={ex1} />
      <Stack.Screen name="ex2" component={ex2} />
      <Stack.Screen name="ex3" component={ex3} />
      <Stack.Screen name="ex4" component={ex4} />
      <Stack.Screen name="ex5" component={ex5} />
      <Stack.Screen name="ex6" component={ex6} />
      <Stack.Screen name="ex7" component={ex7} />
      <Stack.Screen name="ex8" component={ex8} />
      <Stack.Screen name="ex9" component={ex9} />
      <Stack.Screen name="ex_login" component={exlogin} />
      <Stack.Screen name="ex_perfil" component={experfil} />
      <Stack.Screen name="ex_todo" component={extodo} />
      <Stack.Screen name="Pokequiz" component={Pokequiz} />
    </Stack.Navigator>
  );
}