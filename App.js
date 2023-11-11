import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Table from './src/components/table';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.titulo}>
          <Text style={styles.textoTitulo}>PRODUCCION DIARIA DE LA FABRICA</Text>
        </View>
        <Table/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo: {
    flex: 0.2, 
    alignItems: 'center',
    marginTop: 120,
    padding: 10,
    backgroundColor: '#fff',
  },
  textoTitulo: {
    flex: 0,
    backgroundColor: '#fff',
    fontWeight: 'bold',
  },
});
