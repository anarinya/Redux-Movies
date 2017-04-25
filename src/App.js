import React, { Component } from 'react';
import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="sidebar">
          <MoviesList />
        </div>
        <div className="main">
          <MovieDetail />
        </div>
      </div>
    );
  }
}

export default App;
