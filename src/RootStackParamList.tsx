import { createStackNavigator } from "@react-navigation/stack";
import OneScreen from "./screens/OneScreen";
import TwoScreen from "./screens/TwoScreen";
import ResultsScreen from "./screens/ResultsScreen";

export type RootStackParamList = {
  OneScreen: undefined;
  TwoScreen: undefined;
  ResultsScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="OneScreen"
      screenOptions={{ headerShown: false }}// ocultar la barra de navegacion
      //screenOptions={{
        //headerStyle: { backgroundColor: 'white' },
        //headerTintColor: 'blue',
      //}}
      
    >
      <Stack.Screen name="OneScreen" component={OneScreen} />
      <Stack.Screen name="TwoScreen" component={TwoScreen} />
      <Stack.Screen name="ResultsScreen" component={ResultsScreen} />
    </Stack.Navigator>
  );
};
