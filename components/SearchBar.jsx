import React, { useState } from 'react';

function SearchBar({onSearch}) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
    };

    return (
      <div className = 'mb-4'>
        <input 
          className='px-4 py-2 border rounded w-full'
          type="text"
          value = {searchTerm}
          onChange = {handleChange}         
          placeholder='Search by Name..'
          />
      </div>
    ) 
}

export default SearchBar;