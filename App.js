import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

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
    ['Toneladas diarias trasladas por camion', 'Probabilidad1'],
  ];

  // Segunda matriz de 6x3
  const matrix4 = [
    ['Columna1', 'Columna2', 'Columna3'],
    ['55', 'Valor2', 'Valor3'],
    ['Valor4', 'Valor5', 'Valor6'],
    ['Valor7', 'Valorsss8', 'Valor9'],
    ['Valor10', 'Valor11', 'Valor12'],
    ['Valor13', 'Valor14', 'Valor15'],
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

export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text><Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Simulacion depositos de almacen</Text>
      <Text></Text>
      <Text>Debido a un aumento en la ventas, cierta empresa manufactura necesita mas espacio en su fabrica. La solucion
        que se ha propuesto es la construccion de una nuevo deposito para almacenar los productos terminados.
        Este deposito esta ubicado a 30 km de la planta.
      </Text>
      <Text></Text>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Descripcion del problema</Text>
      <Text></Text>
      <Text>Es una realidad que los costos de distribucion de mercancias representar una suma importante
        de gastos para las empresas, la causa es que los costos tienen variables complejas como: costos de transporte, procesaimiento de pedidos, distribucion logistica.
        La falta de planificacion de transporte de la ruta conlleva a una mala adimistracion y perdida.
      </Text>
      <Text></Text>
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Tabla 1 - Producciones</Text>
      <MatrixComponent />
      <Text>Tabla 2</Text>
      <MatrixComponent1 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightgray' },
  matrixContainer: { marginTop: 20 },
  row1: { flexDirection: 'row', height: 60, marginBottom: 2 },
  cell80: { color: 'white', width: 150, margin: 2, textAlign: 'center', borderWidth: 1, borderColor: 'black', backgroundColor: '#0B93F6' },
  cell40: {color: 'white', margin: 2,  width: 180, textAlign: 'center', borderWidth: 1, borderColor: 'black', backgroundColor: '#0B93F6' },
  columnSeparator: { width: 2, backgroundColor: 'transparent', marginTop: 2, marginBottom: 2 },
  row2: { margin: 2, flexDirection: 'row', height: 50, marginBottom: 2 },
  cellRed: { margin: 2, width: 72, textAlign: 'center', lineHeight: 45, borderWidth: 1, borderColor: 'black', backgroundColor: 'lightblue' },
  cellGreen: { margin: 2, width: 180, textAlign: 'center', lineHeight: 45, borderWidth: 1, borderColor: 'black', backgroundColor: 'lightblue' },
  cellWithBorder: { flex: 1, textAlign: 'center', lineHeight: 45, borderWidth: 1, borderColor: 'black' },
  cellWithoutBorder: { flex: 1, textAlign: 'center', lineHeight: 45 },
});
