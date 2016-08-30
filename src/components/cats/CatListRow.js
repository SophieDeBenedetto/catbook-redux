import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CatListRow = ({cat}) => {
  return (
    <tr>
      <td>{cat.name}</td>
      <td>{cat.breed}</td>
      <td>{cat.weight}</td>
      <td>{cat.temperament}</td>
    </tr>
  );
};

CatListRow.propTypes = {
  cat: PropTypes.object.isRequired
};

export default CatListRow;
