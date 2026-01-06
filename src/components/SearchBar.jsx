import { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch, searchTerm }) {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setLocalSearchTerm(value);
    // Busca em tempo real
    onSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(localSearchTerm);
  };

  return (
    <div className="search-bar-container">
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          placeholder="Pesquisar fotos por nome..."
          value={localSearchTerm}
          onChange={handleInputChange}
        />
        <button type="submit" className="search-button" aria-label="Pesquisar">
          <svg 
            className="search-icon" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
