import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TextInput } from 'react-native';
import LineChartExample from './charts/LineChartExample';
import { arreglos } from './Tab1';
import PieChartExample from './charts/PieChartExample';


const valores = [10 , 15 , 30 , 35, 8 , 2 ];
export function mediaArray (vector: number[]) {
  let res:number[] = [];
  let j = 0;
  for (let i = 0; i < 12; i++) {
    let med = 0;
    for (j; j < ((vector.length/12)*(i+1)); j++) {
      med = med + vector[j];
    }
    //console.log(med);
    res[i]= med/(vector.length/12);
  }
  return res;
}
const promedioProduccion = mediaArray(arreglos.prodsArray);
const promedioCamiones   = mediaArray(arreglos.camsArray);


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
            <ScrollView>
            <View>
                <Text style={styles.cellTextMax}>Distribución de la producción</Text>
                  <PieChartExample valores={valores} />
                  <Text style={styles.cellTextMin}>
                    Esta es la distribución de la producción.
                </Text>
            </View>
            <View>
              <Text style={styles.cellTextMax}>Producción y camiones</Text>
                <LineChartExample data1={arreglos.prodsArray} data2={arreglos.camsArray} />
                <View style={styles.etiquetasGraficos}>
                <Text style={styles.produccion}>•PRODUCCIÓN•    </Text>
                <Text style={styles.camiones}>•CAMIONES•</Text>
                </View>
                <Text style={styles.cellTextMin}>
                  En este Gráfico podemos ver la variación entre los la producción y la 
                  capacidad de transporte de la empresa al año.
                </Text>
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
    marginLeft: 20,
    marginRight: 20,
  },
  cellTextMax: {
    paddingTop: 20,
    paddingBottom: 0,
    textAlign: 'center',
    fontSize: 18,
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
  produccion : {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'rgb(134, 65, 244)',
  },
  camiones : {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'rgb(67, 156, 145)',
  },
  etiquetasGraficos: {
    flexDirection : 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
  
export default Tab3;