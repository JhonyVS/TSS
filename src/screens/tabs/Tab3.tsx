import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TextInput } from 'react-native';
import LineChartExample from './charts/LineChartExample';
import { arreglos } from './Tab1';
import PieChartExample from './charts/PieChartExample';


const valores = [10 , 15 , 30 , 35, 8 , 2 ];



const Tab3: React.FC = () => {

  return ( 

    <ImageBackground
      source={require('../../../assets/img/back5.jpg')}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
            <View style={styles.titulo}>
              <Text style={styles.textoTitulo}>GRÁFICOS</Text>
            </View>
 
            <View>
                <Text style={styles.cellTextMax}>Distribución de la producción</Text>
                  <PieChartExample valores={valores} />
            </View>
            <View>
              <Text style={styles.cellTextMax}>Producción y camiones</Text>
                <LineChartExample data1={arreglos.prodsArray} data2={arreglos.camsArray} />
            </View>

        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomWidth: 0.7,
    borderColor: '#000',
  },

  cell: {
    flex: 1,
    padding: 10,
  },
  firstColumn: {
    flex: 1, // Divide la primera columna al 50%
  },
  secondColumn: {
    flex: 1, // La segunda columna también ocupa el 50%
  },
  quarterColumn: {
    flex: 0.25, // Divide las celdas de las columnas en un cuarto
    //textAlign: 'center',
    //justifyContent: 'center',
  },
  halfColumn: {
    flex: 0.5, // Divide las celdas de la columna a la mitad
  },
  thirdColumn: {
    flex: 0.333, // Divide las celdas de la columna a la mitad
  },
  cellText: {
    textAlign: 'center',
  },
  cellTextMin: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 12,
  },
  cellTextMax: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
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
    padding: 0,
    
  },
  textoTitulo: {
    paddingTop: 50,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    fontSize: 24,
  },
  containerTabla: {
    flexDirection: 'row',
  },
  input: {
    height: 30,
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 0.75,
    paddingHorizontal: 5,
    textAlign: 'center'
  },
});
  
export default Tab3;