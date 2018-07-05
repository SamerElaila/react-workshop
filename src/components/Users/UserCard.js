import React from 'react';
import PropTypes from 'prop-types';

import Image from '../Images/Image';

const UserCard = props =>
  console.log(props) || (
    <div className="user-card">
      <Image url={props.avatar_url} />
      <h4>{props.login}</h4>
    </div>
  );

UserCard.propTypes = {
  avatar_url: PropTypes.string,
  name: PropTypes.string
};

export default UserCard;
