import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FooterCustom from '../components/FooterCustom';


const ResultsScreen: React.FC = () => {

  return ( 

    <View style={styles.container}>
      <View style={styles.titulo}>
        <Text style={styles.textoTitulo}> RESULTADOS GENERADOS </Text>
      </View>
      <View style={styles.containerFooter}>
        <FooterCustom />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
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
    titulo: {
      flex: 0.1, 
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 0,
      padding: 10,
      backgroundColor: '#fff',
    },
    textoTitulo: {
      backgroundColor: '#fff',
      fontWeight: 'bold',
    },
  });
  
  export default ResultsScreen;