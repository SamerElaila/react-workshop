import React, { Component } from 'react';

import Search from './Search';
import Users from './Users';

const reduce = data => data.map(el => el.previewURL);

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: []
    };

    this.getUser = this.getUser.bind(this);
  }

  getUser(user) {
    fetch(
      `https://api.github.com/users/${user}?access_token=ccf13c4f87c213515127fdb3599428ca661192fb`
    )
      .then(res => res.json())
      .then(user => {
        console.log(user);
        this.setState({ users: [...this.state.users, user] });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const {
      getUser,
      state: { users }
    } = this;
    console.log(this.state.users, 'users');
    return (
      <div>
        <Search getUser={getUser} />
        <Users users={users} />
      </div>
    );
  }
}

export default App;
