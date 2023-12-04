import { createStackNavigator } from "@react-navigation/stack";
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OneScreen from "./screens/OneScreen";
import TwoScreen from "./screens/TwoScreen";
import { NavigationContainer } from "@react-navigation/native";
import Tab1 from "./screens/tabs/Tab1";
import Tab2 from "./screens/tabs/Tab2";
import Tab3 from "./screens/tabs/Tab3";

export type RootStackParamList = {
  OneScreen: undefined;
  TwoScreen: undefined;
  ResultsScreen: undefined;
};

export type RootTabParamList = {
  Tab1: undefined;
  Tab2: undefined;
  Tab3: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

const ResultsTabs: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false}}>
      <Tab.Screen name="Tab1" component={Tab1} options={{ tabBarLabel: 'SIMULACION' }} />
      <Tab.Screen name="Tab2" component={Tab2} options={{ tabBarLabel: 'RESULTADOS' }}/>
      <Tab.Screen name="Tab3" component={Tab3} options={{ tabBarLabel: 'GRAFICOS' }}/>
    </Tab.Navigator>
  );
};

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OneScreen"
        screenOptions={{ headerShown: false }} // ocultar la barra de navegacion
      >
        <Stack.Screen name="OneScreen" component={OneScreen} />
        <Stack.Screen name="TwoScreen" component={TwoScreen} />
        <Stack.Screen name="ResultsScreen" component={ResultsTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
