import React from 'react';
import { View,TextInput, Text, StyleSheet } from 'react-native';

const TableTransporte = () => {
  return (
    <View style={styles.table}>
      <View style={styles.row}>
        <View style={[styles.cell, styles.firstColumn]}>
          <Text style={styles.cellTextMax}>Transporte diario en toneladas</Text>
        </View>
        <View style={[styles.cell, styles.secondColumn]}>
          <Text style={styles.cellTextMax}>Transporte y logistica</Text>
        </View>
        {/* Agrega más celdas para cada columna */}
      </View>

      <View style={styles.rowMin}>
        <View style={[styles.cell, styles.quarterColumn]}>
          <Text style={styles.cellTextMin}>min</Text>
        </View>
        <View style={[styles.cell, styles.quarterColumn]}>
          <Text style={styles.cellTextMin}>max</Text>
        </View>
        <View style={[styles.cell, styles.halfColumn]}>
          <Text style={styles.cellTextMin}>probabilidad</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={[styles.cell, styles.quarterColumn]}>
        <TextInput
          style={styles.input}
          value={'4.0'}
        />
        </View>
        <View style={[styles.cell, styles.quarterColumn]}>
        <TextInput
          style={styles.input}
          value={'4,5'}
        />
        </View>
        <View style={[styles.cell, styles.halfColumn]}>
        <TextInput
          style={styles.input}
          value={'0,30'}
        />
        </View>
        {/* Agrega más celdas para cada columna */}
      </View>

      <View style={styles.row}>
        <View style={[styles.cell, styles.quarterColumn]}>
        <TextInput
          style={styles.input}
          value={'4,5'}
        />
        </View>
        <View style={[styles.cell, styles.quarterColumn]}>
        <TextInput
          style={styles.input}
          value={'5,0'}
        />
        </View>
        <View style={[styles.cell, styles.halfColumn]}>
        <TextInput
          style={styles.input}
          value={'0,40'}
        />
        </View>
        {/* Agrega más celdas para cada columna */}
      </View>

      <View style={styles.row}>
        <View style={[styles.cell, styles.quarterColumn]}>
        <TextInput
          style={styles.input}
          value={'5,0'}
        />
        </View>
        <View style={[styles.cell, styles.quarterColumn]}>
        <TextInput
          style={styles.input}
          value={'5,5'}
        />
        </View>
        <View style={[styles.cell, styles.halfColumn]}>
        <TextInput
          style={styles.input}
          value={'0,20'}
        />
        </View>
        {/* Agrega más celdas para cada columna */}
      </View>

      <View style={styles.row}>
        <View style={[styles.cell, styles.quarterColumn]}>
        <TextInput
          style={styles.input}
          value={'5,5'}
        />
        </View>
        <View style={[styles.cell, styles.quarterColumn]}>
        <TextInput
          style={styles.input}
          value={'6,0'}
        />
        </View>
        <View style={[styles.cell, styles.halfColumn]}>
        <TextInput
          style={styles.input}
          value={'0,10'}
        />
        </View>
        {/* Agrega más celdas para cada columna */}
      </View>

      </View>
  );
};

const styles = StyleSheet.create({
  table: {
    borderWidth: 2,
    borderColor: '#000',
    margin: 20,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 0.7,
    borderColor: '#000',
  },
  rowMin: {
    flexDirection: 'row',
    paddingBottom: 0,
    borderBottomWidth: 2,
    borderColor: '#000',
    height: 40,
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
  },
  halfColumn: {
    flex: 0.5, // Divide las celdas de la columna a la mitad
  },
  cellText: {
    textAlign: 'center',
  },
  cellTextMin: {
    textAlign: 'center',
    fontSize: 12,
  },
  cellTextMax: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
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

export default TableTransporte;
