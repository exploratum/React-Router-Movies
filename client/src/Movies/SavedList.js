import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
//import { Nav, NavItem, NavLink } from 'reactstrap'

export default class SavedList extends Component {

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          
          <span className="saved-movie" key={movie.id}><NavLink to={`/movie/${movie.id}`}>{movie.title}</NavLink></span>
        ))}

        <Link to='/'><div className="home-button">Home</div></Link>
      </div>
    );
  }
}
