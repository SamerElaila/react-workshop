import React, { Component } from 'react';

import Search from './Search';
import Users from './Users';

const reduce = data => data.map(el => el.previewURL);

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(
      'https://pixabay.com/api/?username=mjweaver01&key=1631539-db8210cabd2636c6df59812df&q='
    )
      .then(res => res.json())
      .then(result => {
        this.setState({ data: reduce(result.hits) });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <Search />
        <Users />
      </div>
    );
  }
}

export default App;
