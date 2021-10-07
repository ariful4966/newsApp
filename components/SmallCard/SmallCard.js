import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import BlockCard from '../BlockCard/BlockCard';

const {width} = Dimensions.get('window');

const SmallCard = ({item}) => {
  return <BlockCard item={item} style={styles.container} imageStyle={styles.image} />;
};
const styles = StyleSheet.create({
  container: {
    width: width / 2,
    marginRight: 20,
    height: 200
  },
  image:{
      height: 100
  }
});
export default SmallCard;
