import { createStackNavigator } from "@react-navigation/stack";
import OneScreen from "./screens/OneScreen";
import TwoScreen from "./screens/TwoScreen";


export type RootStackParamList = {
    OneScreen: undefined;
    TwoScreen: undefined;
  };
  
const Stack = createStackNavigator<RootStackParamList>();
  
export const RootNavigator = () => {
    return (
      <Stack.Navigator initialRouteName="TwoScreen">
        <Stack.Screen name="OneScreen"component={OneScreen}/>
        <Stack.Screen name="TwoScreen"component={TwoScreen}/>
      </Stack.Navigator>
    );
};