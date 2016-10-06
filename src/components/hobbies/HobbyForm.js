import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

class HobbyForm extends React.Component {

  onChange(event) {
    event.preventDefault();
    const hobbyName = event.target.value
    this.props.handleChange({id: this.props.hobby.id, name: hobbyName})
  }

  render() {
    return (
      <div>
      <TextInput
            name="name"
            label="name"
            value={this.props.hobby.name}
            onChange={this.onChange.bind(this)}/>
      </div>
    )
  }
}

export default HobbyForm;