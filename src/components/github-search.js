import React from 'react';
import SearchResults from './searchresults';

export default class Search extends React.Component {
  displayInput() {
    // console.log('Props', this.props);
    if ( this.props.searchType === 'USER' ){
      return(
        <div className="centerInput animated slideInDown">

            <input
              id="searchInput"
              type="text"
              defaultValue="Xuroth"
              ref={(input) => {this.searchInput = input;}}
            />
          <button onClick={this.submitHandler.bind(this)}>Search <i className="fab fa-github-square"></i></button>


        </div>
      );
    } else if (this.props.searchType === 'REPOS') {
      return(
        <div className="centerInput animated slideInDown">

            <input
              id="searchInput"
              type="text"
              defaultValue="Javascript"
              ref={(input) => {this.searchInput = input;}}
            />
          <button onClick={this.submitHandler.bind(this)}>Search Repos on Github</button>


        </div>
      );
    } else {
      console.log(this.props);
    }
  }

  submitHandler(e) {
    e.preventDefault();

    //fetch or call fetch
    console.log('Fetch Data!');
    // let {dispatch} = this.props.data;
    console.log(this.searchInput);
    // dispatch({type: 'UPDATE_USERNAME', payload: this.searchInput.value});
    this.getData(this.props.searchType, this.searchInput.value);
  }

  getData(searchType, searchValue) {
    let {dispatch} = this.props.data;
    let url = '';
    if ( searchType === 'USER') {
      // console.log(searchValue);
      url = `https://api.github.com/users/${searchValue}/repos`;
      // console.log(url);
      fetch(url)
        .then(response => response.json())
        .then(responseJSON => {
          let userData = responseJSON[0].owner;
          let payload = {...userData, repos: responseJSON};
          // console.log(payload);

          dispatch({type: "UPDATE_USERDATA", payload: payload});
        });
    } else {
      url = `https://api.github.com/search/repositories?q=${searchValue}&sort=stars`;
      fetch(url)
        .then(response => response.json())
        .then(responseJSON => {
          dispatch({type: "UPDATE_REPOS", payload: responseJSON.items})
        });
    }


  }

  componentDidMount() {
    this.getData(this.props.searchType, this.searchInput.value);
    // console.log('Mounted!');
  }
  render() {
    return(
      <div className="searchComponent">
        {this.displayInput()}
        <SearchResults data={this.props.data} searchType={this.props.searchType}/>
      </div>

    );
  }
}
