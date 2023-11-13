import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, Button } from 'react-native';
import TableProduccion from './src/components/tableProduccion'
import { StatusBar } from 'expo-status-bar';

import OneScreen from './src/screens/OneScreen';



//const Stack = createStackNavigator();

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.titulo}>
          <Text style={styles.textoTitulo}>PRODUCCION DIARIA DE LA FABRICA</Text>
        </View>
        <TableProduccion/>
      <StatusBar style="auto" />
      <View style={styles.containerButton}>
        <Button title= 'Siguiente' /> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#fff'
  },
  
  containerButton: {
    flexDirection: 'row',
    width: 400,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    flex: 0.2, 
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    padding: 30,
    backgroundColor: '#fff',
  },
  textoTitulo: {
    backgroundColor: '#fff',
    fontWeight: 'bold',
  },
});

//<Stack.Screen name="Two" component={TwoScreen} />
//<Stack.Screen name="Results" component={ResultsScreen} />
