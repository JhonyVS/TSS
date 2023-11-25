import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import OneScreen from './src/screens/OneScreen';
import TwoScreen from "./src/screens/TwoScreen";
import { RootNavigator } from "./src/RootStackParamList";
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
  );
}