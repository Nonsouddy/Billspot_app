import { useState } from 'react';
import '../app/searchBar.css';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Call API or perform search logic here
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <div className='abg'>

    
    <form onSubmit={handleSearch} className="search-bar">
        <AiOutlineSearch size={20} />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
        className="search-input"
      />
      
      <button type="submit" className="search-button">
        
      </button>
      
    </form>
    </div>
  );
};

export default SearchBar;