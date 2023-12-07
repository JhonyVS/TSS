import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../RootStackParamList';
import FooterCustom from '../components/FooterCustom';

type OneScreenProp = StackNavigationProp<RootStackParamList, 'OneScreen'>;

const MatrixComponent = () => {
  // Primera matriz de 1x2
  const matrix1 = [
    ['Produccion tonedas por dia', 'Probabilidad'],
  ];

  // Segunda matriz de 6x3
  const matrix2 = [
    ['50', '55', '0.10'],
    ['55', '60', '0.15'],
    ['60', '65', '0.30'],
    ['65', '70', '0.35'],
    ['75', '80', '0.08'],
    ['80', '85', '0.02'],
  ];

  const matrix3 = [
    ['Produccion tonedas por dia', 'Probabilidad'],
  ];

  // Segunda matriz de 6x3
  const matrix4 = [
    ['4', '5.4', '0.30'],
    ['4.5', '5', '0.40'],
    ['5', '5.5', '0.20'],
    ['5.5', '6', '0.10'],
  ];

  // Renderizar ambas matrices
  return (
    <View style={styles.matrixContainer}>
      {/* Matriz 1 */}
      {matrix1.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row1}>
          {row.map((value, colIndex) => (
            <Text key={colIndex} style={colIndex === 0 ? styles.cell80 : styles.cell40}>
              {value}
            </Text>
          ))}
          {/* Separador de columnas */}
          {row.length > 1 && <View style={styles.columnSeparator} />}
        </View>
      ))}

      {/* Separador */}
      <View style={{ height: 2, backgroundColor: 'transparent' }} />

      {/* Matriz 2 */}
      {matrix2.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row2}>
          {row.map((value, colIndex) => (
            <Text
              key={colIndex}
              style={
                colIndex < 2
                  ? styles.cellRed
                  : colIndex === 2
                  ? styles.cellGreen
                  : colIndex < row.length - 1
                  ? styles.cellWithBorder
                  : styles.cellWithoutBorder
              }>
              {value}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
};


const MatrixComponent1 = () => {
  // Primera matriz de 1x2
  
  const matrix3 = [
    ['Toneladas diarias trasladas por camion', 'Probabilidad'],
  ];

  // Segunda matriz de 6x3
  const matrix4 = [
    ['50', '55', '0.10'],
    ['55', '60', '0.15'],
    ['60', '65', '0.30'],
    ['65', '70', '0.35'],
    ['75', '80', '0.08'],
    ['80', '85', '0.02'],
  ];

  // Renderizar ambas matrices
  return (
    <View style={styles.matrixContainer}>
      {/* Matriz 1 */}
      {matrix3.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row1}>
          {row.map((value, colIndex) => (
            <Text key={colIndex} style={colIndex === 0 ? styles.cell80 : styles.cell40}>
              {value}
            </Text>
          ))}
          {/* Separador de columnas */}
          {row.length > 1 && <View style={styles.columnSeparator} />}
        </View>
      ))}

      {/* Separador */}
      <View style={{ height: 2, backgroundColor: 'transparent' }} />

      {/* Matriz 2 */}
      {matrix4.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row2}>
          {row.map((value, colIndex) => (
            <Text
              key={colIndex}
              style={
                colIndex < 2
                  ? styles.cellRed
                  : colIndex === 2
                  ? styles.cellGreen
                  : colIndex < row.length - 1
                  ? styles.cellWithBorder
                  : styles.cellWithoutBorder
              }>
              {value}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
}; 

const Inicio: React.FC = () => {
const navigation = useNavigation<OneScreenProp>();
const handleButtonPress = () => { 
    // Navega a la siguiente pantalla al presionar el botón
    navigation.navigate('OneScreen'); // Reemplaza 'NextScreen' con el nombre real de tu siguiente pantalla
  };
  return (

    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>SIMULACÍON DE DEPÓSITOS</Text>
      <Text style= {styles.textoPlano}>Debido a un aumento en la ventas, cierta empresa manufactura necesita mas espacio en su fabrica. La solucion
        que se ha propuesto es la construccion de una nuevo deposito para almacenar los productos terminados.
        Este deposito esta ubicado a 30 km de la planta.
      </Text>
      <Text style={styles.textoSubtitulo}>Descripción del problema</Text>
      <Text style= {styles.textoPlano}>Es una realidad que los costos de distribucion de mercancias representar una suma importante
        de gastos para las empresas, la causa es que los costos tienen variables complejas como: costos de transporte, procesaimiento de pedidos, distribucion logistica.
        La falta de planificacion de transporte de la ruta conlleva a una mala adimistracion y perdida.
      </Text>
      <Text style={styles.textoSubtitulo}>Tabla 1 - Producción Fábrica</Text>
      <MatrixComponent />
      <Text style={styles.textoSubtitulo}>Tabla 2 - Capacidad por camion en toneladas</Text>
      <MatrixComponent1 />
      <StatusBar style="auto" />
        <View style={styles.containerButton}>
            <Button title="EMPEZAR" onPress={handleButtonPress} />
        </View>
        <View >
            <FooterCustom/>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: 'rgba(50,100,100,0.2)' 
},
containerButton : {
    //flexDirection: 'row',
    justifyContent: 'center',
    //alignSelf: 'center',
    margin: 20,
},
titulo: {
    flex: 0.3,
    paddingTop: 40,
    paddingBottom:20,
    fontWeight: 'bold', 
    textAlign: 'center',
    fontSize: 18
},
textoPlano: {
    //fontWeight: 'bold', 
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign:'auto',
    fontSize: 14,
},
textoSubtitulo: {
    fontWeight: 'bold', 
    padding: 10,
    paddingBottom: 2,
    textAlign:'auto',
    fontSize: 14

},
matrixContainer: { 
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    margin: 10,
},
  row1: { 
    flexDirection: 'row', 
    height: 40, 
    marginBottom: 2 
},
cell80: {
     color: 'white', 
     flex: 1,
     //width: 150, 
     margin: 2, 
     textAlign: 'center', 
     borderWidth: 1, 
     borderColor: 'black', 
     backgroundColor: '#204060' 
    },
cell40: {
    color: 'white', 
    margin: 2,
    flex: 0.75,  
    //width: 180, 
    textAlign: 'center', 
    borderWidth: 1, 
    borderColor: 'black', 
    backgroundColor: '#204060' 
},
columnSeparator: {
     width: 2, 
     backgroundColor: 'transparent', 
     marginTop: 1, 
     marginBottom: 1 
    },
row2: {
     margin: 2, 
     flexDirection: 'row', 
     height: 40, 
     marginBottom: 2 
    },
cellRed: {
     margin: 2, 
     flex: 0.5,
     //width: 50, 
     textAlign: 'center', 
     lineHeight: 45, 
     borderWidth: 1, 
     borderColor: 'black', 
     backgroundColor: 'white' 
    },
cellGreen: {
     margin: 2, 
     flex : 0.75,
     //width: 180, 
     textAlign: 'center', 
     lineHeight: 45, 
     borderWidth: 1, 
     borderColor: 'black', 
     backgroundColor: 'white' 
    },
cellWithBorder: {
     flex: 0.75, 
     textAlign: 'center', 
     lineHeight: 45, 
     borderWidth: 1, 
     borderColor: 'black' 
    },
cellWithoutBorder: {
     flex: 1, 
     textAlign: 'center', 
     lineHeight: 25 
    },
    containerFooter: {
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

export default Inicio;