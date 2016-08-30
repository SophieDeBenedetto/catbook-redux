import React, {PropTypes} from 'react';
import HobbyListRow from './HobbyListRow';

const HobbyList = ({hobbies}) => {
  return (
    <div>
      <h3>Hobbies</h3>
      <table className="table">
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {hobbies.map(hobby => 
            <HobbyListRow key={hobby.id} hobby={hobby} />
          )}
        </tbody>
      </table>
    </div>
  );
};

HobbyList.propTypes = {
  hobbies: PropTypes.array.isRequired
};

export default HobbyList;