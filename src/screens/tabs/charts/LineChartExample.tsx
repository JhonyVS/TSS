import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from "react-native";


const screenWidth = Dimensions.get("window").width -20;

const LineChartExample = ({ data1, data2 }) => {
  const c = data2.map(p=> p*13);
  const prods = mediaArray(data1);
  const cams = mediaArray(c);

  function mediaArray (vector: number[]) {
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
  

  const chartData = {
    labels: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'], // Puedes personalizar las etiquetas según tus datos
    datasets: [
      {
        data: prods,
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // Color de la línea para data1
      },
      {
        data: cams,
        color: (opacity = 1) => `rgba(67, 156, 145, ${opacity})`, // Color de la línea para data2
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: 'rgba(255, 255, 255, 0.2)', // Fondo transparente
    backgroundGradientTo: 'rgba(255, 255, 255, 0.2)',
  
    decimalPlaces: 0,
    color: (opacity = 0.5) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 10,
    },
  };

  return (
    <View style={styles.container}>
      <LineChart
        style={styles.chart}
        data={chartData}
        width={screenWidth}
        height={180}
        yAxisLabel="T. "
        //transparent={true}
        chartConfig={chartConfig}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default LineChartExample;
