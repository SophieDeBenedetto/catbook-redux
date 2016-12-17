import React, {PropTypes} from 'react';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CatList from './CatList';
import NewCatPage from './NewCatPage';
import * as actions from '../../actions/catActions'

class CatsPage extends React.Component {
  componentWillMount() {
    if (this.props.cats[0].id == '') {
      this.props.actions.loadCats();
    }
  }
  render() {
    const cats = this.props.cats;
    return (
      <div className="col-md-12">
        <h1>Cats <Link to={'/cats/new'} className="btn btn-primary">+ cat</Link></h1>
        <div className="col-md-4">
          <CatList cats={cats} />
        </div>
        <div className="col-md-8">
          {this.props.children}
        </div>
      </div>
    );
  }
}

CatsPage.propTypes = {
  cats: PropTypes.array.isRequired,
  children: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  if (state.cats.length > 0) {
    return {
      cats: state.cats
    };
  } else {
    return {
      cats: [{id: '', name: '', breed: '', temperament: '', weight: '', hobbies: []}]
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(CatsPage);





