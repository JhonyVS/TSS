import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TableProduccion from '../components/tableProduccion';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../RootStackParamList';
import { ScrollView } from 'react-native-gesture-handler';

type TwoScreenProp = StackNavigationProp<RootStackParamList, 'TwoScreen'>;

const OneScreen: React.FC = () => {
  const navigation = useNavigation<TwoScreenProp>();

  const handleButtonPress = () => {
    navigation.navigate('TwoScreen');
  };

  return ( 
    <ImageBackground
      source={require('../../assets/img/back4.jpg')}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <ScrollView>
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.textoTitulo}>PRODUCCION DIARIA DE LA FABRICA</Text>
          </View>
          <TableProduccion />
          <View style={styles.containerButton}>
            <Button title ='Siguiente' onPress={handleButtonPress} />
          </View>
          
        </View>
        </ScrollView>
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
  textoTitulo: {
    paddingTop: 80,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
  },
  containerButton: {
    justifyContent: 'center',
    margin: 20,
    elevation: 5,
  },
});

export default OneScreen;
