import { createStackNavigator } from "@react-navigation/stack";
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inicio from "./screens/Inicio";
import OneScreen from "./screens/OneScreen";
import TwoScreen from "./screens/TwoScreen";
import { NavigationContainer } from "@react-navigation/native";
import Tab1 from "./screens/tabs/Tab1";
import Tab2 from "./screens/tabs/Tab2";
import Tab3 from "./screens/tabs/Tab3";

export type RootStackParamList = {
  Inicio: undefined;
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
    <Tab.Navigator
      screenOptions={({ route }) => ({
         headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Tab1') {
            iconName = focused ? 'calculator' : 'grid';
          } else if (route.name === 'Tab2') {
            iconName = focused ? 'document' : 'ios-list';
          } else if (route.name === 'Tab3') {
            iconName = focused ? 'ios-analytics' : 'podium';
          }

          // Puedes devolver cualquier componente JSX como icono
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
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
        initialRouteName="Inicio"
        screenOptions={{ headerShown: false }} // ocultar la barra de navegacion
      >
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="OneScreen" component={OneScreen} />
        <Stack.Screen name="TwoScreen" component={TwoScreen} />
        <Stack.Screen name="ResultsScreen" component={ResultsTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
