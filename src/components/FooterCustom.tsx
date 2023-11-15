import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FooterCustom = () => {
  return (
    <View >
      <Text style={styles.text}>
          Version 001 G7
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontStyle: 'italic',
    //fontFamily: 'arial',
  },
});

export default FooterCustom;