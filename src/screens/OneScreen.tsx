import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TableProduccion from '../components/tableProduccion';
import { StatusBar } from 'expo-status-bar';
import FooterCustom from '../components/FooterCustom';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../RootStackParamList';

type TwoScreenProp = StackNavigationProp<RootStackParamList, 'TwoScreen'>;

const OneScreen: React.FC = () => {
  const navigation = useNavigation<TwoScreenProp>();

  const handleButtonPress = () => {
    navigation.navigate('TwoScreen');
  };

  return ( 
    <ImageBackground
      source={require('../../assets/img/back3.jpg')}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <View style={styles.contentContainer}>
          <View style={styles.titulo}>
            <Text style={styles.textoTitulo}>PRODUCCION DIARIA DE LA FABRICA</Text>
          </View>
          <TableProduccion />
          <View style={styles.containerButton}>
            <Button title="Siguiente" onPress={handleButtonPress} />
          </View>
          <View style={styles.containerFooter}>
            <FooterCustom />
          </View>
        </View>
        <StatusBar style="auto" />
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
    backgroundColor: 'rgba(0,200,100,0.5)',
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
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  containerFooter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    //backgroundColor: '#fff', // Optional: Set background color if needed
    paddingVertical: 20, // Optional: Add padding for visual appeal
  },
});

export default OneScreen;
