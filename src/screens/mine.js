import React from 'react';
// import ReactDOM from 'react-dom';

import Header from '../components/header';
import Search from '../components/github-search';

export default class MinePage extends React.Component {
  render() {
    // console.log('SearchPage-props',this.props)
    let data = this.props.data;
    // console.log(data);
    return(
      <div>
        <Header title="Mine" />
        <div className="pageContent">
          <Search searchType="USER" data={data}/>
        </div>

      </div>
    );
  }
}
