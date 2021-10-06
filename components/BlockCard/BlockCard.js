import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Subtitle from '../Subtitle/Subtitle';
import Title from '../Title/Title';

const BlockCard = ({style}) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        source={require('../../assets/Images/desktopBg.jpeg')}
        style={styles.image}
      />
      <View style={styles.contentContainer}>
        <Title>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum aut unde illum expedita reprehenderit totam corporis nam et, quidem obcaecati voluptatibus tempore perspiciatis nostrum perferendis temporibus fugiat ipsam amet molestiae itaque dolore vel vero? Placeat perspiciatis libero inventore deleniti architecto hic nesciunt sint, sunt exercitationem, praesentium consectetur voluptas dolorum suscipit.</Title>
        <Subtitle>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum aut unde illum expedita reprehenderit totam corporis nam et, quidem obcaecati voluptatibus tempore perspiciatis nostrum perferendis temporibus fugiat ipsam amet molestiae itaque dolore vel vero? Placeat perspiciatis libero inventore deleniti architecto hic nesciunt sint, sunt exercitationem, praesentium consectetur voluptas dolorum suscipit.</Subtitle>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
  },
  contentContainer: {
    padding: 5,
  },
});

export default BlockCard;
