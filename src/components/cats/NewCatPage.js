import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as courseActions from '../../actions/catActions';
import CatForm from './CatForm';


class NewCatPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cat: {name: '', breed: '', weight: '', temperament: '', 
      hobbies: [
        {id: 1, name: '', types: [{id: 1, name: ''}]}
      ]},
      saving: false
    };
    this.saveCat = this.saveCat.bind(this);
    this.updateCatHobbies = this.updateCatHobbies.bind(this);
    this.updateCatTypes = this.updateCatTypes.bind(this);
    this.addHobby = this.addHobby.bind(this);
    this.updateCatState = this.updateCatState.bind(this);
  }

  addHobby() {
    const hobbyId = this.state.cat.hobbies[this.state.cat.hobbies.length - 1].id + 1
    this.setState({cat: Object.assign(this.state.cat, {hobbies: [...this.state.cat.hobbies, {id: hobbyId, name: ''}]})})
  }

  updateCatHobbies(hobbyData) {
    let hobby = this.state.cat.hobbies.find(hobby => {return hobby.id == hobbyData.id})
    const index = this.state.cat.hobbies.indexOf(hobby)
    this.state.cat.hobbies.splice(index)
    this.setState(Object.assign(this.state.cat, {hobbies: [...this.state.cat.hobbies, hobbyData]}))
  }

  updateCatTypes(typeData) {
    let hobby = this.state.cat.hobbies.find(hobby => {return hobby.id == typeData.hobbyId})
    let type = hobby.types.find(type => {return type.id == typeData.id})
    hobby.types.splice(hobby.types.indexOf(type))
    delete typeData.hobbyId
    const index = this.state.cat.hobbies.indexOf(hobby)
    this.state.cat.hobbies.splice(index)
    let newHobby = Object.assign(hobby, {types: [...hobby.types, typeData]})
    this.setState({cat: Object.assign(this.state.cat, {hobbies: [...this.state.cat.hobbies, newHobby]})})
   
  }

  updateCatState(event) {
    const field = event.target.name;
    const cat = this.state.cat;
    cat[field] = event.target.value;
    return this.setState({cat: cat});
  }

  saveCat(event) {
    debugger;
    event.preventDefault();
    this.props.actions.createCat(this.state.cat)
  }
  
  render() {
    return (
      <div>
        <h1>new cat</h1>
        <CatForm 
          cat={this.state.cat} 
          onSave={this.saveCat}
          onChange={this.updateCatState}
          onHobbyChange={this.updateCatHobbies}
          onTypeChange={this.updateCatTypes}
          addHobby={this.addHobby}/>
      </div>
    );
  }
}

function hobbiesForCheckBoxes(hobbies) {
  return hobbies.map(hobby => {
    hobby['checked'] = false;
    return hobby;
  });
}

NewCatPage.propTypes = {
  checkBoxHobbies: PropTypes.array.isRequired, 
  actions: PropTypes.object.isRequired
};



function mapStateToProps(state, ownProps) {
  let checkBoxHobbies = [];
  if (state.hobbies.length > 0) {
    checkBoxHobbies = hobbiesForCheckBoxes(Object.assign([], state.hobbies));
  }

  return {
    checkBoxHobbies: checkBoxHobbies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(NewCatPage);





