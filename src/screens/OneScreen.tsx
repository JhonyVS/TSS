import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import TableProduccion from '../components/tableProduccion';
import { StatusBar } from 'expo-status-bar';
import FooterCustom from '../components/FooterCustom';


const OneScreen = () => {
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
      <View style = {styles.containerFooter}>
      <StatusBar style="auto" />
        <FooterCustom/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containerButton: {
    //flex: 0.20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center', // Aligns the container horizontally in the center
    marginTop: 20, // Optional: Add some top margin if needed
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
    flex: 0.3, 
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

export default OneScreen;