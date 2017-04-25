import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetail extends Component {
  render() {
    const { activeMovie } = this.props;

    if (!activeMovie) return <Greeting />;

    return (
      <div className="MovieDetail">
        <h2>Movie Details</h2>
        <ul>
          <li><strong>Title</strong>: { activeMovie.title }</li>
          <li><strong>Runtime</strong>: { activeMovie.runtime }</li>
        </ul>
      </div>
    );
  }
}

const Greeting = (props) => {
  return (
    <div>
      <h2>Welcome!</h2>
      <p>Please select a movie</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activeMovie: state.activeMovie
  };
};

export default connect(mapStateToProps)(MovieDetail);