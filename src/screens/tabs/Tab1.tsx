import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TextInput } from 'react-native';
import { Produccion } from '../../models/produccion';

const diasLaborables: number = 200;

const p = new Produccion();

const generarProduccion = (nro : number): number =>{
  return p.getProduccionDiaria(nro);
}
const generarTransporte = (nro : number): number =>{
  return p.getToneladasCamion(nro);
}
const generarAleatorio=(): number=>{
  return Math.random();
}

export const arreglos = {
  prodsArray: [],
  camsArray: [],
}


const generarTabla = () => {
  const textViews = [];
  
  for (let i = 0; i < diasLaborables; i++) {
    let p1 = generarAleatorio();
    let p2 = generarAleatorio();
    let prods = generarProduccion(p1);
    arreglos.prodsArray.push(prods);
    let cams = generarTransporte(p2);
    arreglos.camsArray.push(cams);
    textViews.push(
      <View style={styles.row} key={i}>
        <View style={[styles.cell, styles.quarterColumn]}>
          <Text style={styles.cellTextMin}> {Number(p1).toFixed(2)}</Text>
        </View> 
        <View style={[styles.cell, styles.quarterColumn]}>
          <Text style={styles.cellTextMin}> {prods} t.</Text>
        </View>
        <View style={[styles.cell, styles.quarterColumn]}>
          <Text style={styles.cellTextMin}> {Number(p2).toFixed(2)}</Text>
        </View>
        <View style={[styles.cell, styles.quarterColumn]}>
          <Text style={styles.cellTextMin}> {Number(cams).toFixed(2)} t.</Text>
        </View>
      </View>
    );
  }
  return textViews;
};

const Tab1: React.FC = () => {

  return ( 

    <ImageBackground
      source={require('../../../assets/img/back5.jpg')}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
        <View style={styles.titulo}>
            <Text style={styles.textoTitulo}>SIMULACION</Text>
          </View>
          <ScrollView>
            <View style={styles.row}>
              <View style={[styles.cell, styles.thirdColumn]}>
                <Text style={styles.cellTextMax}>Costo Alquiler/Tonelada</Text>
              </View>
              <View style={[styles.cell, styles.thirdColumn]}>
                <Text style={styles.cellTextMax}>Costo camion nuevo</Text>
              </View>
              <View style={[styles.cell, styles.thirdColumn]}>
                <Text style={styles.cellTextMax}>Dias laborables/año</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={[styles.cell, styles.thirdColumn]}>
                <TextInput
                  style={styles.input}
                  value={'100 $'}
                />
              </View>
              <View style={[styles.cell, styles.thirdColumn]}>
                <TextInput
                  style={styles.input}
                  value={'1.300.000 $'}
                />
              </View>
              <View style={[styles.cell, styles.thirdColumn]}>
                <TextInput
                  style={styles.input}
                  value={diasLaborables+''}
                />
              </View>
            </View>
            
            <View style={styles.row}>
              <View style={[styles.cell, styles.quarterColumn]}>
                <Text style={styles.cellTextMax}>Probabilidad Produccion</Text>
              </View>
              <View style={[styles.cell, styles.quarterColumn]}>
                <Text style={styles.cellTextMax}>Produccion</Text>
              </View>
              <View style={[styles.cell, styles.quarterColumn]}>
                <Text style={styles.cellTextMax}>Probabilidad Tonelada/Camion</Text>
              </View>
              <View style={[styles.cell, styles.quarterColumn]}>
                <Text style={styles.cellTextMax}>Tonelada/Camion</Text>
              </View>
            </View>
            {/** TABLA GENERADA AUTOMATICAMENTE */}
            {generarTabla()}

          </ScrollView>

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
    fontSize: 20,
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
    fontSize: 13,
  },
  cellTextMax: {
    textAlign: 'center',
    fontSize: 13,
    //fontWeight: 'bold',
  },

  container: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(60,50,50,0.1)',
  },
  contentContainer: {
    flex: 1,
    //justifyContent: 'center',
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
  
export default Tab1;