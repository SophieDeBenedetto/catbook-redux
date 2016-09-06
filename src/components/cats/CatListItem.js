import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import CatPage from './CatPage';

const CatListItem = ({cat}) => {
  return (
    <li className="list-group-item"><Link to={'/cats/' + cat.id}>{cat.name}</Link></li>
  );
};

CatListItem.propTypes = {
  cat: PropTypes.object.isRequired
};

export default CatListItem;
