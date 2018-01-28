import React from 'react';
import {formatBytes} from '../functions/helpers';
import dateFormat from 'dateformat';

export default class SearchResults extends React.Component {

  displayHeader() {
    // console.log(this.props.data.userprofile);
    if (this.props.searchType === 'USER') {
      return this.displayHeaderUser();
    } else if (this.props.searchType === 'REPOS') {
      return this.displayHeaderRepos();
    }
  }

  displayHeaderRepos() {
    //Display the header for REPOS Search
    return(
      <div className="componentHeader repoHeader">
        <h1>Search Results</h1>
      </div>
    );
  }

  displayHeaderUser() {
    //Display the header for USER Search
    let profile = this.props.data.userprofile;
    console.log(profile);
    return(
      <div className="componentHeader profileHeader">
        <a href={`https://github.com/${profile.login}?tab=repositories`} target="_blank">
          <img src={profile.avatar_url} alt="User Avatar"/><h1>{profile.login}</h1>
        </a>
      </div>
    );
  }

  displayContent(){
    //Show content for user or repo list!
    // if(this.props.searchType === 'USER') {
      console.log('displayContent');
      return this.displayRepoList();
    // }
  }
  displayRepoList(){
    //show the list of repos!
    let repos = this.props.data.repos.map((repo) => (
      <li key={repo.id}>
        <div className="repoCard">
          <div className="repoHeader">
            <a href={`https://github.com/${repo.full_name}`} target="_blank">
              <span className="badge">{(repo.language)?repo.language:'None'}</span>
              <h4 className='repo-title'>{repo.name} <small>{`[${repo.full_name}]`}</small></h4>
            </a>
          </div>
          <div className="description">
            {(repo.description !== null)?repo.description:'This repo has no description available'}
          </div>
          <div className="meta">
            <span className="starsCount"><i className="fal fa-star"></i> {repo.stargazers_count}</span>
            <span className="watchersCount"><i className="fal fa-eye"></i> {repo.watchers_count}</span>
            <span className="sizeText"><i className="fal fa-file-archive"></i> {formatBytes(repo.size * 1024)}</span>
            <span className="updateText"><i className="fal fa-calendar-edit"></i> {dateFormat(repo.updated_at, 'dddd mmm dS, yyyy @ hh:MM tt')}</span>
          </div>
        </div>
      </li>
    ));
    return(
      <ul className="searchResultsRepoList">
        {repos}
      </ul>
    );
  }

  render() {
    return(
      <div className="searchResults">
        {this.displayHeader()}
        {this.displayContent()}
      </div>
    );
  }
}
