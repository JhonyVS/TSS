import React from 'react';
import { View, Text, StyleSheet, Button,ImageBackground} from 'react-native';
import TableTransporte from '../components/tableTransporte';
import { StatusBar } from 'expo-status-bar';
import FooterCustom from '../components/FooterCustom';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../RootStackParamList';

type resultsScreenProp = StackNavigationProp<RootStackParamList, 'ResultsScreen'>;
type resultsScreenBack = StackNavigationProp<RootStackParamList, 'OneScreen'>;
const TwoScreen: React.FC = () => {
  const navigation = useNavigation<resultsScreenProp>(); // Obtiene la función de navegación
  const navigationBack = useNavigation<resultsScreenBack>(); // Obtiene la función de navegación

  const handleButtonPress = () => { 
    // Navega a la siguiente pantalla al presionar el botón
    navigation.navigate('ResultsScreen'); // Reemplaza 'NextScreen' con el nombre real de tu siguiente pantalla
  };
  const handleButtonPressBack = () => { 
    // Navega a la siguiente pantalla al presionar el botón
    navigationBack.navigate('OneScreen'); // Reemplaza 'NextScreen' con el nombre real de tu siguiente pantalla
  };

  return (
    <ImageBackground
      source={require('../../assets/img/back4.jpg')}
      style={styles.container}
    >
      <View style={styles.overlay}>
    <View style={styles.container}>
      <View style={styles.titulo}>
          <Text style={styles.textoTitulo}>CAPACIDAD DE TRANSPORTE DE LA FABRICA</Text>
        </View>
        <TableTransporte/>
      <StatusBar style="auto" />
      <View style={styles.containerButton}>
        <Button title= 'Simular' onPress={handleButtonPress}/> 
      </View>
      <View style={styles.containerButton}>
        <Button title= 'Volver' onPress={handleButtonPressBack}/> 
      </View>

      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(50,50,50,0.1)',
  },
  contentContainer: {
    flex: 1,
    //justifyContent: 'center',
  },
  titulo: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    
  },
  textoTitulo: {
    paddingTop: 50,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    fontSize: 24,
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default TwoScreen;