import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const LineChartExample = ({ data1, data2 }) => {
  const chartData = {
    labels: [], // Puedes personalizar las etiquetas según tus datos
    datasets: [
      {
        data: data1,
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // Color de la línea para data1
      },
      {
        data: data2,
        color: (opacity = 1) => `rgba(67, 156, 145, ${opacity})`, // Color de la línea para data2
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: 'rgba(255, 255, 255, 0.1)', // Fondo transparente
    backgroundGradientTo: 'rgba(255, 255, 255, 0.1)',
  
    decimalPlaces: 0,
    color: (opacity = 0.2) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  return (
    <View style={styles.container}>
      <LineChart
        style={styles.chart}
        data={chartData}
        width={350}
        height={220}
        yAxisLabel=""
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
