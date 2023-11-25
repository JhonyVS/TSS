import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import OneScreen from './src/screens/OneScreen';
import TwoScreen from "./src/screens/TwoScreen";
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= 'OneScreen' component={OneScreen}/> 
        <Stack.Screen name= "TwoScreen" component={TwoScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}