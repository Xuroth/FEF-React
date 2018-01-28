import React from 'react';
// import ReactDOM from 'react-dom';

import Header from '../components/header';
import Search from '../components/github-search';

export default class SearchPage extends React.Component {
  render() {
    // console.log('SearchPage-props',this.props);
    let data = this.props.data;
    return(
      <div className="pageContent">
        <Header title="Search" />
        <Search searchType="REPOS" data={data}/>
      </div>
    );
  }
}
