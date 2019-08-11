import React, { Component } from 'react';

import Navbar from './components/Navbar';
import SearchComponent from './components/SearchComponent';

import './App.scss';

class App extends Component {
  componentWillMount() {
    document.title = 'Hacker News Search';
  }

  render() {
    return (
      <div className="app">
        <Navbar title="Hacker News Search" author="Paul Leavitt" />
        <SearchComponent />
      </div>
    );
  }
}

export default App;
