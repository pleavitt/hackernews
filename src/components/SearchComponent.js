import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

import './SearchComponent.css';
import axios from 'axios';
// import PageNav from './PageNav';
import ResultList from './ResultList';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(false);
  const [results, setResults] = useState([]);

  const handleChange = event => {
    setQuery(event.target.value);
  };
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setResults([]);
    setIsLoading(true);
    const url = query ? `https://hn.algolia.com/api/v1/search?query=${query}&tags=story` :
      'https://hn.algolia.com/api/v1/search?tags=front_page';

    const result = await axios(url);
    const cleanup = result.data.hits.filter(result => result.url)
    setIsLoading(false);
    setResults(cleanup);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query !== '') {
      fetchData();
    }
  };

  return (
    <div className="searchContainer">
      {error && (
        <div className="notification is-danger">
          <button type="button" className="delete" />
          {error}
        </div>
      )}

      
      <div className="input-container">
        <input
          id="input"
          value={query}
          margin="normal"
          onChange={e => handleChange(e)}
          type="search"
          className="input-with-icon"
          placeholder="Search articles"
        />
        <button type="submit" onClick={handleSubmit} class="input-icon"><FaSearch /></button>
      </div>
      <ResultList results={results} />

      {/* <PageNav isFetching={isLoading} /> */}
    </div>
  );
};

export default SearchComponent;
