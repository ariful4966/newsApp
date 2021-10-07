import React from 'react';
import HorizontalList from '../HorizontalList/HorizontalList';

const BrakingNews = ({data}) => {
    return (
       <HorizontalList title="Braking News" data={data}/>
    );
};

export default BrakingNews;