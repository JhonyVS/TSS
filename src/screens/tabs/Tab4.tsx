import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, Button } from 'react-native';
import { RootStackParamList } from '../../RootStackParamList';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import PrintScreen from './print/PrintScreen';

type resultsScreenBack = StackNavigationProp<RootStackParamList, 'OneScreen'>;

const Tab4: React.FC = () => {


    const navigationBack = useNavigation<resultsScreenBack>();
    function handleButtonPressVolver():void  { 
        
        navigationBack.navigate('OneScreen');
    };
    function handleButtonPressOpen(): void {
        throw new Error('Function not implemented.');
    }
    function handleButtonPressSave(): void {
        throw new Error('Function not implemented.');
    }
    function handleButtonPressPrint(): void {
         generatePdf();
    }
    const html = PrintScreen.generateHtml();

  let generatePdf = async () => {
    const file = await printToFileAsync({
      html: html,
      base64: false
    });

    await shareAsync(file.uri);
  };

return ( 

    <ImageBackground
      source={require('../../../assets/img/back5.jpg')}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
            <View style={styles.titulo}>
              <Text style={styles.textoTitulo}>OPCIONES</Text>
            </View>
            <ScrollView>
            <View style={styles.containerButton}>
                <Button title ='IMPRIMIR' onPress={handleButtonPressPrint} />
            </View>

            <View>
                <View style={styles.containerButton}>
                    <Button title ='ABRIR' onPress={handleButtonPressOpen} />
                </View>
            </View>
            <View>
                
                <View style={styles.containerButton}>
                    <Button title ='GUARDAR' onPress={handleButtonPressSave} />
                </View>
            </View>
            <View>

            <View style={styles.containerButtonVolver}>
                    <Button title ='Volver Inicio' onPress={handleButtonPressVolver} />
                </View>

            </View>
            </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  cellTextMin: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 14,
},
containerButton: {
  justifyContent: 'center',
  margin: 5,
  elevation: 25,
  paddingLeft: 40,
  paddingRight: 40,
  paddingBottom:20,
},
containerButtonVolver: {
  justifyContent: 'center',
  margin: 5,
  elevation: 25,
  paddingTop: 80,
  paddingLeft: 40,
  paddingRight: 40,
  paddingBottom:40,
},
  container: {
    flex: 1,
    resizeMode: 'cover',
},
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(50,50,150,0.2)',
},
  contentContainer: {
    flex: 1,
    //justifyContent: 'center',
},
  titulo: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    
},
  textoTitulo: {
    paddingTop: 20,
    paddingBottom: 50,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    fontSize: 24,
},

});
  
export default Tab4;