import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as catActions from '../../actions/catActions';
import HobbyList from '../hobbies/HobbyList';
import CatForm from './CatForm';
// import toastr from 'toastr'; 

class CatPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      cat: Object.assign({}, this.props.cat), 
      saving: false,
      isEditing: true
    };
    this.saveCat = this.saveCat.bind(this);
    this.updateCatState = this.updateCatState.bind(this);
  }

  componentWillReceiveProps(nextProps) {
     if (this.props.cat.id != nextProps.cat.id) {
      this.setState({cat: Object.assign({}, nextProps.cat)});
    }
  }

  updateCatState(event) {
    debugger;
    const field = event.target.name;
    const cat = this.state.cat;
    cat[field] = event.target.value;
    return this.setState({cat: cat});
  }

  saveCat(event) {
    event.preventDefault();
    this.setState({saving: true});
    // this.props.actions.saveCat(this.state.course)
    //   .then(() => {this.redirect()});

  } 

  render() {
    if (this.state.isEditing) {
      return (
      <CatForm 
        cat={this.state.cat} 
        onSave={this.saveCat} 
        onChange={this.updateCatState} 
        saving={this.state.saving}/> 
      )
    }
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