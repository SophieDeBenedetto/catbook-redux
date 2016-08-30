import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as catActions from '../../actions/catActions';
// import toastr from 'toastr'; 

class CatPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      cat: Object.assign({}, this.props.cat)
    };
  }
  render() {
    return (
      <div class="col-md-8 col-md-offset-2">
        <h1>{this.state.cat.name}</h1>
      </div>
    );
  }
}



CatPage.propTypes = {
  cat: PropTypes.object.isRequired
};

function getCatById(cats, id) {
  return cats.filter(cat => cat.id == id)[0]
}

function mapStateToProps(state, ownProps) {
  const cat = getCatById(state.cats, ownProps.params.id);
  return {cat: cat};
}

export default connect(mapStateToProps)(CatPage);