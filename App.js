import React from 'react';
import {fakeData} from './assets/data/fakeData';
import BrakingNews from './components/BrakingNews.js/BrakingNews';
import FetureNews from './components/FetureNews/FetureNews';
import Screen from './components/Screen/Screen';
import SearchBar from './components/SearchBar/SearchBar';
import TechNews from './components/TechNews/TechNews';

const App = () => {
  const breakingNews = fakeData.filter(
    item => item.category === 'breaking-news',
  );
  const techNews = fakeData.filter(
    item => item.category === 'tech',
  );
  const fetureNews = fakeData.find(item=>item.id === 5)
  return (
    <Screen>
      <SearchBar />
      <FetureNews item={fetureNews} />
      <BrakingNews data={breakingNews} />
      <TechNews data={techNews}/>
    </Screen>
  );
};

export default App;
