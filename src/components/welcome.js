import React from 'react';

export default class Welcome extends React.Component{
  render() {
    return(
      <div className="welcomeCard">
        <div className="welcomeHeader">
          <h1>Welcome!</h1>
        </div>
        <div className="welcomeBody">
          <p>
            Welcome to the Front End Foundations React Project!
            <br /><br />
            This is a simple app build using <span className="code">React</span> & <span className="code">Redux</span> to search Github for repositories matching a particular term. In addition, the app also utilizes the GitHub API to fetch all of my own projects, and includes a search feature so you can quickly search for any user's public repos.
            <br /><br />
            To get started, just click on one of the nav-links at the top!
          </p>
        </div>
      </div>
    );
  }
}
