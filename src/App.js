import React, { Component } from 'react';
import Header from './components/Header';
import Personal from './components/CVForm/Personal';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />
      </>
    );
  }
}

export default App;
