import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as catActions from '../../actions/catActions';
import HobbyList from '../hobbies/HobbyList';
// import toastr from 'toastr'; 

class CatPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      cat: Object.assign({}, this.props.cat)
    };
  }

  componentWillReceiveProps(nextProps) {
     if (this.props.cat.id != nextProps.cat.id) {
      this.setState({cat: Object.assign({}, nextProps.cat)});
    }
  }

  render() {
    return (
      <div className="col-md-8 col-md-offset-2">
        <h1>{this.state.cat.name}</h1>
        <p>breed: {this.state.cat.breed}</p>
        <p>weight: {this.state.cat.weight}</p>
        <p>temperament: {this.state.cat.temperament}</p>
        <HobbyList hobbies={this.state.cat.hobbies} />
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
  let cat = {id: '', name: '', breed: '', weight: '', temperament: '', hobbies: []};
  const catId = ownProps.params.id;
  if (catId && state.cats.length > 0) {
    cat = getCatById(state.cats, ownProps.params.id);
  }

  return {cat: cat};
}

export default connect(mapStateToProps)(CatPage);