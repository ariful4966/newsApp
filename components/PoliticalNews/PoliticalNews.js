//import liraries
import React from 'react';
import VerticalList from '../VerticalList/VerticalList';

// create a component
const PoliticalNews = ({data}) => {
    return <VerticalList title="Political News" data={data} />
};

;

//make this component available to the app
export default PoliticalNews;
