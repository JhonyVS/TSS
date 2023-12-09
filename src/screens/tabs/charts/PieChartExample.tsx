import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from "react-native";
import { prodMedia } from '../../../models/produccion';

const screenWidth = Dimensions.get("window").width-20;

const PieChartExample = ({ valores }) => {
  const vectorProds = prodMedia;
  const chartData = valores.map((value, index) => ({
    name: `%  ${vectorProds[index]}`,
    value,
    color: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 1)`,
  }));

  return (
    <View style={styles.container}>
      <PieChart
        data={chartData}
        width={screenWidth}
        height={180}
        chartConfig={{
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          
        }}
        accessor="value"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
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
});

export default PieChartExample;
