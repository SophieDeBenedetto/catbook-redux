import React, {PropTypes} from 'react';
import CatListRow from './CatListRow';

const CatList = ({cats}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Breed</th>
          <th>Weight</th>
          <th>Temperament</th>
        </tr>
      </thead>
      <tbody>
        {cats.map(cat => 
          <CatListRow key={cat.id} cat={cat} />
        )}
      </tbody>
    </table>
  );
};

CatList.propTypes = {
  cats: PropTypes.array.isRequired
};

export default CatList;