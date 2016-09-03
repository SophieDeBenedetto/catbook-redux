  import React, {PropTypes} from 'react';

class CheckBox extends React.Component {
  render() {
    return (
     <div className="field">
        <div>
          <label>{this.props.item.name}</label>
          <input type="checkbox" name={this.props.item.name} value={this.props.item.id} checked={this.props.item.checked} onChange={this.props.handleChange}/>
        </div>
      </div>
    );
  }
}

CheckBox.propTypes = {
  item: PropTypes.object.isRequired, 
  handleChange: PropTypes.func.isRequired
};

export default CheckBox;
