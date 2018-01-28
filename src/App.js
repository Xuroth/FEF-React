import React, { Component } from 'react';
import { connect } from 'react-redux';
// import logo from './logo.svg';
import './App.css';

// import Header from './components/header';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import {default as Search, default as Mine} from './components/github-search';
import HomePage from './screens/home';
import SearchPage from './screens/search';
import MinePage from './screens/mine';

class App extends Component {
  render() {
    // let {pageTitle} = this.props;
    let data = this.props;
    // console.log(data);
    return (
      <div className='container'>
        <Router>
          <div>
            <Route path='/search' render={() => <SearchPage data={data} />}/>
            <Route path='/mine' render={() => <MinePage data={data} />} />
            <Route exact path="/" render={() => <HomePage data={data} />} />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
    userprofile: state.userprofile,
    repos: state.repos,
    // searchType: state.searchType,
    // pageTitle: state.pageTitle
  }
}

export default connect(mapStateToProps)(App);
