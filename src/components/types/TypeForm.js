import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

class TypeForm extends React.Component {

  onChange(event) {
    event.preventDefault();
    const typeName = event.target.value
    this.props.handleChange({id: this.props.type.id, hobbyId: this.props.hobbyId, name: typeName})
  }

  render() {
    return (
      <div>
      <TextInput
            name="name"
            label="name"
            value={this.props.type.name}
            onChange={this.onChange.bind(this)}/>
      </div>
    )
  }
}

export default TypeForm;