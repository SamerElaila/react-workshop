import React, { Component } from 'react';

import './style.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      username: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {
      state: { username },
      props: { getUser }
    } = this;
    getUser(username);
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  render() {
    console.log(this.state, 'this.state');

    return (
      <div className="search">
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.handleClick}>Search</button>
      </div>
    );
  }
}

export default Search;
