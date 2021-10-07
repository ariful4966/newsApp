import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import SmallCard from '../SmallCard/SmallCard';
import Title from '../Title/Title';

const HorizontalList = ({title, data}) => {
  return (
    <>
      <Title size={20}>{title}</Title>
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <SmallCard item={item} />}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
    container: {
        marginVertical: 15
    }
})

export default HorizontalList;
