import React from 'react';
import SearchBar from './Components/SearchBar';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Country Search</h1>
      </header>
      <SearchBar />
    </div>
  );
}

export default App;