import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import TableProduccion from '../components/tableProduccion';
import { StatusBar } from 'expo-status-bar';


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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#fff'
  },
  containerButton: {
    flexDirection: 'row',
    width: 350,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    flex: 0.2, 
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    padding: 30,
    backgroundColor: '#fff',
  },
  textoTitulo: {
    backgroundColor: '#fff',
    fontWeight: 'bold',
  },
});

export default OneScreen;