import { createNativeStackNavigator } from '@react-navigation/native-stack';
import '../styles/global.css'
import Home from './index';  
<<<<<<< HEAD
import Ex1 from './ex_login'; 
import Ex2 from './ex_perfil'; 
import Ex3 from './ex_todo'; 
import Pokequiz from './ex_pokequiz'; 
=======
import Ex1 from './ex1'; 
import Ex2 from './ex2'; 
import Ex3 from './ex3'; 
import Pokequiz from './pokequiz'; 

>>>>>>> 4b4822a0ba76034cedb902cfa5436c81ffe8e0ed

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
<<<<<<< HEAD
        <Stack.Screen name="Ex_login" component={Ex1} />
        <Stack.Screen name="Ex_perfil" component={Ex2} />
        <Stack.Screen name="Ex_To_Do" component={Ex3} />
=======
        <Stack.Screen name="Ex1" component={Ex1} />
        <Stack.Screen name="Ex2" component={Ex2} />
        <Stack.Screen name="Ex3" component={Ex3} />
>>>>>>> 4b4822a0ba76034cedb902cfa5436c81ffe8e0ed
        <Stack.Screen name="Pokequiz" component={Pokequiz} />
      </Stack.Navigator>
  );
}