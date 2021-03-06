import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const SearchBar = () => {
    return (
        <View style={styles.coantainer}>
            <TextInput style={styles.serachInput} placeholder="Search Here..."/>
        </View>
    );
};
const styles = StyleSheet.create({
    coantainer: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 8,
        justifyContent: 'center'
    },
    serachInput: {
        width: '100%',
        height: '100%',
        paddingLeft: 8,
        fontSize:16
    }
})

export default SearchBar;