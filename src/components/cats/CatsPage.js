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
    debugger;
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
  // actions: PropTypes.object.isRequired
};

// connect returns a function, which we then invoke with an arg of CoursesPage
// iif!! | kind of like elixir piping

function mapStateToProps(state, ownProps) {
  // state means redux store state
  // means our component has this.props.cats
  debugger;
  return {
    cats: state.cats
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(courseActions, dispatch)
//   };
// }


export default connect(mapStateToProps)(CatsPage);




// connect only add dispatch property onto component if you DON"T define mapDispatchToProps function. If you do define that function, no dispatch property on component

