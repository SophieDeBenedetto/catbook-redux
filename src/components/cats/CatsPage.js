import React, {PropTypes} from 'react';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CatList from './CatList';
import NewCatPage from './NewCatPage';

class CatsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
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
  return {
    cats: state.cats
  };
}

export default connect(mapStateToProps)(CatsPage);





