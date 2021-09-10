import React, { Component } from 'react';
import { getPokedexData } from './apiCalls'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokeDex: []
    }
  }

  componentDidMount() {
    getPokedexData()
    .then(data => {
      this.setState({
        pokeDex: data.results
      })
    })
  }

  render() {
    return(
      <div>Hello World</div>
    )
  }
}

export default App
