import React from 'react';
import {activeClass} from '../functions/helpers';

class Header extends React.Component {
  render() {
    return(
      <div className="header">
        <h1>{this.props.title}</h1>
        <ul className="navbar">
          <li className={activeClass('/')}>
            <a href="/">
              <i className="fal fa-home"></i> Home
            </a>
          </li>
          <li className={activeClass('/mine')}>
            <a href="/mine">
              <i className="fal fa-user"></i>  Mine
            </a>
          </li>
          <li className={activeClass('/search')}>
            <a href="/search">
              <i className="fal fa-search"></i>  Search
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
