import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FooterCustom = () => {
  return (
    <View >
      <Text style={styles.text}>
          GRUPO 7
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
    shadowColor: 'red',
    textShadowColor: 'red',
    fontSize: 17,
    padding:5,
    shadowOpacity: 0.5,
    
  },
});

export default FooterCustom;