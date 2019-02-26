import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/searchForm';

class App extends Component {
  render() {
    return (
      <div className="App">
          <SearchForm></SearchForm>
      </div>
    );
  }
}

export default App;
