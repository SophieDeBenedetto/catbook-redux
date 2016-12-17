import React, {PropTypes} from 'react';
import TextInput from './common/TextInput';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sessionActions from '../actions/sessionActions';

class LogInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {credentials: {email: 'sophie@email.com', password: 'password'}}
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  }

  onSave(event) {
    event.preventDefault();
    this.props.actions.loginUser(this.state.credentials);
  }

  render() {
    return (
      <div>
        <form>
          <TextInput
            name="email"
            label="email"
            value={this.state.credentials.email}
            onChange={this.onChange}/>

          <TextInput
            name="password"
            label="password"
            type="password"
            value={this.state.credentials.password}
            onChange={this.onChange}/>

          <input
            type="submit"
            className="btn btn-primary"
            onClick={this.onSave}/>
            {" "}
        </form>
      </div>
  );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}
export default connect(null, mapDispatchToProps)(LogInPage);
