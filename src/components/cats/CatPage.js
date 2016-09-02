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
      catHobbies: Object.assign([], [...this.props.catHobbies]),
      checkBoxHobbies: Object.assign([], [...this.props.checkBoxHobbies]),
      saving: false,
      isEditing: false
    };
    this.saveCat = this.saveCat.bind(this);
    this.updateCatState = this.updateCatState.bind(this);
    this.updateCatHobbies = this.updateCatHobbies.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    if (this.props.cat.id != nextProps.cat.id) {
      this.setState({cat: Object.assign({}, nextProps.cat)});
    }
    if (this.props.checkBoxHobbies.length < nextProps.checkBoxHobbies.length) {
      this.setState({catHobbies: [...nextProps.catHobbies], checkBoxHobbies: [...nextProps.checkBoxHobbies]});
    }

    this.setState({saving: false, isEditing: false});
  }

  toggleEdit() {
    this.setState({isEditing: true});
  }

  updateCatHobbies(event) {
    const cat = this.state.cat;
    const hobbyId = event.target.value;
    const hobby = this.state.checkBoxHobbies.filter(hobby => hobby.id == hobbyId)[0];
    const checked = !hobby.checked;
    hobby['checked'] = !hobby.checked;
    if (checked) {
      cat.hobby_ids.push(hobby.id);
    } else {  
      cat.hobby_ids.splice(cat.hobby_ids.indexOf(hobby.id));
    }
    this.setState({cat: cat});

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
    this.setState({saving: true});
    this.props.actions.updateCat(this.state.cat);

  } 

  render() {
    if (this.state.isEditing) {
      return (
      <div>
        <h1>edit cat</h1>
        <CatForm 
          cat={this.state.cat} 
          hobbies={this.state.checkBoxHobbies}
          onSave={this.saveCat} 
          onChange={this.updateCatState} 
          onHobbyChange={this.updateCatHobbies}
          saving={this.state.saving}/> 
      </div>
      )
    }
    return (
      <div className="col-md-8 col-md-offset-2">
        <h1>{this.state.cat.name}</h1>
        <p>breed: {this.state.cat.breed}</p>
        <p>weight: {this.state.cat.weight}</p>
        <p>temperament: {this.state.cat.temperament}</p>
        <HobbyList hobbies={this.state.catHobbies} />
        <button onClick={this.toggleEdit} className="btn btn-default  ">edit</button>
      </div>
    );
  }
}


CatPage.propTypes = {
  cat: PropTypes.object.isRequired,
  catHobbies: PropTypes.array.isRequired,
  checkBoxHobbies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function getCatById(cats, id) {
  return Object.assign({}, cats.filter(cat => cat.id == id)[0])
}

function hobbiesForCheckBoxes(hobbies, cat=null) {
  return hobbies.map(hobby => {
    if (cat && (cat.hobby_ids.filter(hobbyId => hobbyId == hobby.id).length > 0)) {
      hobby['checked'] = true;
    } else {
      hobby['checked'] = false;
    }

    return hobby;
  })
}

function collectCatHobbies(hobbies, cat) {
  let selected = hobbies.map(hobby => {
    if (cat.hobby_ids.filter(hobbyId => hobbyId == hobby.id).length > 0) {
      return hobby;
    }
  })
  return selected.filter(el => el != undefined)
}

function mapStateToProps(state, ownProps) {
  const stateHobbies = Object.assign([], state.hobbies)
  let checkBoxHobbies = [];
  let catHobbies = [];
  let cat = {name: '', breed: '', weight: '', temperament: '', hobby_ids: []};
  const catId = ownProps.params.id;
  if (catId && state.cats.length > 0 && state.hobbies.length > 0) {
    cat = getCatById(state.cats, ownProps.params.id);
    checkBoxHobbies = hobbiesForCheckBoxes(stateHobbies, cat);
    if (cat.hobby_ids.length > 0) {
      catHobbies = collectCatHobbies(stateHobbies, cat);
    }
  } else if (state.cats.length > 0 && state.hobbies.length > 0){
    checkBoxHobbies = hobbiesForCheckBoxes(stateHobbies)
  }
    return {cat: cat, checkBoxHobbies: checkBoxHobbies, catHobbies: catHobbies};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(catActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CatPage);





