import React, { Component } from 'react';

class EducationInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='Section__Wrapper'>
        <span className='Section__Title'>Education</span>
        <input placeholder='Program'></input>
        <input placeholder='University'></input>
        <input placeholder='From'></input>
        <input placeholder='To'></input>
      </section>
    );
  }
}

export default EducationInput;
