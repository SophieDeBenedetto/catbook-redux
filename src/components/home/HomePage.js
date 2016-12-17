import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Cat Book</h1>
        <p>the best way manage your cat collection.</p>
        <Link to="login" className="btn btn-primary btn-lg">log in as a test user</Link>
      </div>
    );
  }
}

export default HomePage;