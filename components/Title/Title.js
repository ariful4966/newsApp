import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Title = ({children, numberOfLines = 2, size = 18}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[styles.container, {fontSize: size}]}>
      {children}
    </Text>
  );
};
const styles = StyleSheet.create({
  container: {
    fontWeight: 'bold',
  },
});

export default Title;
