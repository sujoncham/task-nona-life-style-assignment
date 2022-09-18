import React from 'react';
import './SearchField.css';
const SearchField = () => {
    return (
        <div>
            <input type="text" className='padd-class' placeholder='search something' />
            <button className='searchBtn padd-class'>search</button>
        </div>
    );
};

export default SearchField;