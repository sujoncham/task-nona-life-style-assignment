import React from 'react';
import './SearchField.css';
const SearchField = ({handleSearch}) => {
    return (
        <div>
            <h1 className='my-text'>Search Note!</h1>
            <input onChange={handleSearch} type="text" className='padd-class' placeholder='search something' />
        </div>
    );
};

export default SearchField;