import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SectionWrapper>
        <Header />
        <Main />
        <Footer />
      </SectionWrapper>
    );
  }
}

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

export default App;
