import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Subtitle from '../Subtitle/Subtitle';
import Title from '../Title/Title';

const FlatCard = ({ item}) => {
  return (
    <View style={styles.container}>
      <Image
        source={item.thumbnail}
        style={[styles.image]}
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
  container: {
      flexDirection: 'row',
      alignItems:'center',
      backgroundColor: 'white',
      borderRadius: 8,
      overflow: 'hidden',
      marginBottom: 10,
      height: 80
  },
  image: {
      flex: 0.35,
      height: '100%'
  },
  contentContainer:{
      flex: 0.65,
      paddingHorizontal: 5
  }

});

export default FlatCard;
