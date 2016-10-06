import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import TypeForm from '../types/TypeForm';

class HobbyForm extends React.Component {

  onChange(event) {
    event.preventDefault();
    const hobbyName = event.target.value
    this.props.handleChange({id: this.props.hobby.id, name: hobbyName})
  }

  collectTypeFields() {
    return this.props.hobby.types.map(type => {
      return <TypeForm type={type} hobbyId={this.props.hobby.id} handleChange={this.props.handleTypeChange}/>
    })
  }

  render() {
    const typeFields = this.collectTypeFields();
    return (
      <div>
      <TextInput
            name="name"
            label="name"
            value={this.props.hobby.name}
            onChange={this.onChange.bind(this)}/>
        <h3>hobby types:</h3>
        {typeFields}
      </div>
    )
  }
}

export default HobbyForm;