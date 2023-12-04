import React from 'react';
import { View, Text, StyleSheet, ImageBackground, } from 'react-native';
import { arreglos } from './Tab1';

const costoCamionExtra:number = 100;

var promedioProds = ():number =>{
  let index = 0;
  let suma=0;
    for ( index ; index < arreglos.prodsArray.length; index++) {
      suma = suma+arreglos.prodsArray[index];
    }
    return Number(suma/index);
}
var promedioCams = ():number =>{
  let index:number = 0;
  let promedio:number=0;
    for ( index ; index < arreglos.camsArray.length; index++) {
      promedio = promedio+arreglos.camsArray[index];
    }
    return Number(promedio/index);
  }
var promedioCamionesProduccion = () : number => { 
  return promedioProds() / promedioCams();
}
var costosCamsExtra = ():number =>{
    let costos:number = 0;
    let camiones : number = Number(Number(promedioCamionesProduccion()).toFixed(0));
    let saldo = 0;
    for (let index = 0; index < arreglos.camsArray.length; index++) {
      let prodDia = arreglos.prodsArray[index];
      let camsDia = arreglos.camsArray[index];
      saldo = (prodDia/camsDia) - camiones;
      if( saldo > 0){
        costos = costos + saldo*costoCamionExtra;
      }
    }
    return costos;
  }

costosCamsExtra();

const Tab2: React.FC = () => {

  return ( 

    <ImageBackground
      source={require('../../../assets/img/back3.jpg')}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.titulo}>
            <Text style={styles.textoTitulo}>RESULTADOS</Text>
          </View>
          
          <View>
            <View style={styles.row}>
              <View style={[styles.cell, styles.thirdColumn]}>
                <Text style={styles.cellTextMax}>Costo Alquiler /T.</Text>
              </View>
              <View style={[styles.cell, styles.thirdColumn]}>
                <Text style={styles.cellTextMax}>Costo camion nuevo</Text>
              </View>
              <View style={[styles.cell, styles.thirdColumn]}>
                <Text style={styles.cellTextMax}>Dias laborables /año</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={[styles.cell, styles.thirdColumn]}>
                <Text style={styles.cellTextBordered}>100</Text>
              </View>
              <View style={[styles.cell, styles.thirdColumn]}>
                <Text style={styles.cellTextBordered}>1.300.000</Text>
              </View>
              <View style={[styles.cell, styles.thirdColumn]}>
                <Text style={styles.cellTextBordered}>250</Text>
              </View>
            </View>
            
            <View style={styles.row}>
              <View style={[styles.cell, styles.thirdColumn]}>
                <Text style={styles.cellTextMax}>Promedio Produccion/dia</Text>
              </View>
              <View style={[styles.cell, styles.thirdColumn]}>
                <Text style={styles.cellTextMax}>Promedio Camiones/Ton.</Text>
              </View>
              <View style={[styles.cell, styles.thirdColumn]}>
                <Text style={styles.cellTextMax}>Promedio Camiones N.</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={[styles.cell, styles.thirdColumn]}>
                <Text style={styles.cellTextBordered}>{promedioProds()+''}</Text>
              </View>
              <View style={[styles.cell, styles.thirdColumn]}>
                <Text style={styles.cellTextBordered}>{Number(promedioCams()).toFixed(2)+''}</Text>
              </View>
              <View style={[styles.cell, styles.thirdColumn]}>
                <Text style={styles.cellTextBordered}>{Number(promedioCamionesProduccion()).toFixed(2)}</Text>
              </View>
            </View>

              
                <View style={styles.titulo}>
                  <Text style={styles.textoTitulo}>CONCLUCIONES</Text>
                </View>
              
              <View style={styles.row}>
              <View style={[styles.cell, styles.thirdColumn]}>
                <Text style={styles.cellTextMax}>Total produccion anual</Text>
              </View>
              <View style={[styles.cell, styles.thirdColumn]}>
                <Text style={styles.cellTextMax}>Camiones necesarios</Text>
              </View>
              <View style={[styles.cell, styles.thirdColumn]}>
                <Text style={styles.cellTextMax}>Costo de alquiler adicional</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={[styles.cell, styles.thirdColumn]}>
                <Text style={styles.cellTextBordered}>{Number(promedioProds()* 250).toFixed(2)}</Text>
              </View>
              <View style={[styles.cell, styles.thirdColumn]}>
                <Text style={styles.cellTextBordered}>{Number(promedioCamionesProduccion()).toFixed(0)+ ''}</Text>
              </View>
              <View style={[styles.cell, styles.thirdColumn]}>
                <Text style={styles.cellTextBordered}>{Number(costosCamsExtra()).toFixed(2)}</Text>
              </View>
            </View>

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
    fontSize: 16,
    fontWeight: 'bold',
  },
  cellTextBordered: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    borderWidth: 0.7,
    //borderBlockColor: '#000',
    //borderColor: "thistle",
  },

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
    padding: 0,
  },
  textoTitulo: {
    paddingTop: 50,
    fontWeight: 'bold',
    color: 'white',
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
  
export default Tab2;