import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import CatList from './CatList';

class CatsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const cats = this.props.cats;
    return (
      <div>
        <h1>Cats</h1>
        <CatList cats={cats} />
      </div>
    );
  }
}

CatsPage.propTypes = {
  cats: PropTypes.array.isRequired
  // actions: PropTypes.object.isRequired
};

// connect returns a function, which we then invoke with an arg of CoursesPage
// iif!! | kind of like elixir piping

function mapStateToProps(state, ownProps) {
  // state means redux store state
  // means our component has this.props.cats
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

