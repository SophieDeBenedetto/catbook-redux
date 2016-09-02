import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import CatPage from './CatPage';

const CatListRow = ({cat}) => {
  return (
    <tr>
      <td><Link to={'/cats/' + cat.id}>{cat.name}</Link></td>
    </tr>
  );
};

CatListRow.propTypes = {
  cat: PropTypes.object.isRequired
};

export default CatListRow;
