import React from 'react';
import {View} from 'react-native';
import BlockCard from './components/BlockCard/BlockCard';
import FetureNews from './components/FetureNews/FetureNews';
import Screen from './components/Screen/Screen';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
  return (
    <Screen>
      <SearchBar />
      <FetureNews/>
    </Screen>
  );
};

export default App;
