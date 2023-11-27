import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TextInput } from 'react-native';
import { Produccion } from '../models/produccion';

const diasLaborables: number = 50;

const generarProduccion = (): number =>{
  const p = new Produccion();
  return p.getProduccionDiaria(Math.random());
}
const generarTransporte = (): number =>{
  const p = new Produccion();
  return Number(p.getToneladasCamion(Math.random()).toFixed(2));
}

const generarTabla = () => {
  const textViews = [];
  
  for (let i = 0; i < diasLaborables; i++) {
    let prods = generarProduccion();
    let cams = Number(generarTransporte());
    let camsNecesarios = Number(prods/cams).toFixed(0);
    textViews.push(
      <View style={styles.row} key={i}>
        <View style={[styles.cell, styles.quarterColumn]}>
          <Text style={styles.cellTextMin}> {prods}</Text>
        </View> 
        <View style={[styles.cell, styles.quarterColumn]}>
          <Text style={styles.cellTextMin}> {cams}</Text>
        </View>
        <View style={[styles.cell, styles.quarterColumn]}>
          <Text style={styles.cellTextMin}> {camsNecesarios}</Text>
        </View>
        <View style={[styles.cell, styles.quarterColumn]}>
          <Text style={styles.cellTextMin}> {camsNecesarios}</Text>
        </View>
      </View>
    );
  }
  return textViews;
};

const ResultsScreen: React.FC = () => {

  return ( 

    <ImageBackground
      source={require('../../assets/img/back3.jpg')}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.titulo}>
            <Text style={styles.textoTitulo}>RESULTADOS SIMULACION</Text>
          </View>
          
          <ScrollView>
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
                <TextInput
                  style={styles.input}
                  value={'100'}
                />
              </View>
              <View style={[styles.cell, styles.thirdColumn]}>
                <TextInput
                  style={styles.input}
                  value={'1300000'}
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
                <Text style={styles.cellTextMax}>P./dia</Text>
              </View>
              <View style={[styles.cell, styles.quarterColumn]}>
                <Text style={styles.cellTextMax}>C.T./dia</Text>
              </View>
              <View style={[styles.cell, styles.quarterColumn]}>
                <Text style={styles.cellTextMax}>Cam. N.</Text>
              </View>
              <View style={[styles.cell, styles.quarterColumn]}>
                <Text style={styles.cellTextMax}>C.A./T</Text>
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
    padding: 30,
    
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
  
export default ResultsScreen;