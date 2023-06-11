import React from 'react';
import './styles.css';

function SearchBar({ formSubmit, value, handleSearchKey, clearSearch }) {
  return (
    <div className='searchBar-wrap'>
      <form onSubmit={formSubmit}>
        <div className='searchbar'>
          <input
            type='text'
            id='searchInput'
            placeholder='Search By Category'
            value={value}
            onChange={handleSearchKey}
          />
          {value && <span onClick={clearSearch}>X</span>}
        </div>
        <button type='submit'>Go</button>
      </form>
    </div>
  );
}

export default SearchBar;
