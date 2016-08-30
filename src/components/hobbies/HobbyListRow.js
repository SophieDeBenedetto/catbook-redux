import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const HobbyListRow = ({hobby}) => {
  return (
    <tr>
      <td>{hobby.name}</td>
    </tr>
  );
};

HobbyListRow.propTypes = {
  hobby: PropTypes.object.isRequired
};

export default HobbyListRow;
