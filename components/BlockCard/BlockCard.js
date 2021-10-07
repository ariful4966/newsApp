import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Subtitle from '../Subtitle/Subtitle';
import Title from '../Title/Title';

const BlockCard = ({style, imageStyle, item}) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        source={item.thumbnail}
        style={[styles.image, imageStyle]}
      />
      <View style={styles.contentContainer}>
        <Title>
          {item.title}
        </Title>
        <Subtitle>
          {item.desc}
        </Subtitle>
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
