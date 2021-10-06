import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Subtitle = ({children, numberOfLines = 2, size = 15}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={(styles.container, {fontSize: size})}>
      {children}
    </Text>
  );
};
const styles = StyleSheet.create({
  container: {
   
  },
});

export default Subtitle;
