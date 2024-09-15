import React, { useState, useEffect } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [countries, setCountries] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  useEffect(() => {
    fetch('https://dpaste.com/79QXDY8TD/raw')
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleInputChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);

    const filtered = countries.filter(
      (country) =>
        country.country.toLowerCase().includes(query) ||
        country.capital.toLowerCase().includes(query)
    );
    setFilteredSuggestions(filtered);
  };

  return (
    <div className="autocomplete-container">
      <input
        type="text"
        value={searchTerm}
        placeholder="Search by country or capital..."
        onChange={handleInputChange}
        className="search-input"
      />
      {filteredSuggestions.length > 0 && (
        <ul className="suggestions-list">
          {filteredSuggestions.map((suggestion, index) => (
            <li key={index} className="suggestion-item">
              {suggestion.country} - {suggestion.capital}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
