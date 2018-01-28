import React from 'react';
import Welcome from '../components/welcome';
// import ReactDOM from 'react-dom';

import Header from '../components/header';
// import Search from '../components/github-search';

export default class HomePage extends React.Component {
  render() {
    return(
      <div className="pageContent">
        <Header title="Home" />
        <Welcome />
      </div>
    );
  }
}
