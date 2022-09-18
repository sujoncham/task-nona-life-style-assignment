import React from 'react';
import './SearchField.css';
const SearchField = ({handleSearch}) => {
    return (
        <div>
            <input onChange={handleSearch} type="text" className='padd-class' placeholder='search something' />
        </div>
    );
};

export default SearchField;