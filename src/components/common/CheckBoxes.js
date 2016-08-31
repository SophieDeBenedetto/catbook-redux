import React, {PropTypes} from 'react';

class CheckBoxes extends React.Component {
  constructor(props) {
    super(props);
    this.makeBoxes = this.makeBoxes.bind(this);
    this.checkBox = this.checkBox.bind(this);
  }

  checkBox(item) {
    console.log(item)
    return (
      <div key={item.id}>
        <label>{item.name}</label>
        <input type="checkbox" name={item.name} value={item.id} checked={true} onChange={this.props.handleChange}/>
      </div>
    )
  }

  makeBoxes() {
    return this.props.collection.map(item => {return this.checkBox(item)})
  }

  render() {
    const boxes = this.makeBoxes()
    return (
      <div>
       <div className="field">
          {boxes}
        </div>
      </div>
    );
  }
}

  // let wrapperClass = 'form-group';
  // // if (error && error.length > 0) {
  // //   wrapperClass += " " + 'has-error';
  // // }

  // // {cat.hobbies.map(hobby => {
  // //         debugger;
  // //         <input type="checkbox" name={hobby.name} value={hobby.id}/>
  // // })} 

  // function checkBox(item) {
  //   return (
  //     <label>
  //       <input type="checkbox" checked={true} onChange={handleChange}/>
  //       {item.name}
  //     </label>
  //   )
  // }

  // function makeBoxes() {
  //   {collection.map(item => {
  //     checkBox(item)
  //   })}
  // }

  // return (
  //   <div className={wrapperClass}>
  //    <div className="field">
  //       {makeBoxes()}
  //     </div>
  //   </div>
  // );


CheckBoxes.propTypes = {
  collection: PropTypes.array.isRequired, 
  handleChange: PropTypes.func.isRequired
};

export default CheckBoxes;
