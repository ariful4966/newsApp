import React from 'react';
import {fakeData} from './assets/data/fakeData';
import BrakingNews from './components/BrakingNews.js/BrakingNews';
import EntertainmentNews from './components/EntertainmentNews/EntertainmentNews';
import FetureNews from './components/FetureNews/FetureNews';
import PoliticalNews from './components/PoliticalNews/PoliticalNews';
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
  const politicalNews = fakeData.filter(item=>item.category === 'political')
  const entertainmentNews = fakeData.filter(item=>item.category === 'entertainment')
  const fetureNews = fakeData.find(item=>item.id === 5)
  return (
    <Screen>
      <SearchBar />
      <FetureNews item={fetureNews} />
      <BrakingNews data={breakingNews} />
      <PoliticalNews data={politicalNews}/>
      <TechNews data={techNews}/>
      <EntertainmentNews data={entertainmentNews}/>
    </Screen>
  );
};

export default App;
