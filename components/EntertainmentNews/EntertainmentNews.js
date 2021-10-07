//import liraries
import React from 'react';
import VerticalList from '../VerticalList/VerticalList';

// create a component
const EntertainmentNews = ({data}) => {
    return <VerticalList title="Entertainment News" data={data} />
};

;

//make this component available to the app
export default EntertainmentNews;