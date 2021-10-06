import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

const Screen = ({children}) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
          marginTop: StatusBar.currentHeight,
          paddingHorizontal:15,
          backgroundColor: '#f7f',
          flex: 1
    }
})

export default Screen;