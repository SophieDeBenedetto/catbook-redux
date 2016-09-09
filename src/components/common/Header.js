import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as sessionActions from '../../actions/sessionActions';


class Header extends React.Component {
  constructor(props) {
    super();
    this.logOut = this.logOut.bind(this);
  }

  logOut(event) {
    event.preventDefault();
    this.props.actions.logOutUser();
  }

  render() {
    if (this.props.logged_in) {
      return (
        <nav>
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
          {" | "}
          <Link to="/cats" activeClassName="active">Cats</Link>
          {" | "}
          <Link to="/about" activeClassName="active">About</Link>
          {" | "}
          <a href="/logout" onClick={this.logOut}>log out</a>
        </nav>
      );
    } else {
      return (
        <nav>
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
          {" | "}
          <Link to="/cats" activeClassName="active">Cats</Link>
          {" | "}
          <Link to="/about" activeClassName="active">About</Link>
          {" | "}
          <Link to="/login" activeClassName="active">log in</Link>
        </nav>
      );
    }
  }
}

Header.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  return {logged_in: state.session};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
