import React from 'react';
import PropTypes from 'prop-types';

import Image from '../Images/Image';

const UserCard = props => (
  <div className="user-card">
    <Image url={props.url} />
    <h4>{props.username}</h4>
  </div>
);

UserCard.propTypes = {
  url: PropTypes.string,
  username: PropTypes.string
};

export default UserCard;
