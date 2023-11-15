import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import OneScreen from './src/screens/OneScreen';
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name= "Primer paso" 
          component={OneScreen}
          options = {{tittle: "Bienvenido"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}