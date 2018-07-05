import React from 'react';

import UserCard from './UserCard';

import './styles.css';

const Users = props => (
  <section>
    Users Section
    <div className="user-cards">
      {props.users.map(user => <UserCard key={user.id} {...user} />)}
    </div>
  </section>
);

export default Users;
