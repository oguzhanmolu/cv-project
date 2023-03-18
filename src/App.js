import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
