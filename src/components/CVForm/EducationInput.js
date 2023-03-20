import React, { Component } from 'react';

class EducationInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='Section__Wrapper'>
        <span className='Section__Title'>Education</span>
        <input name='educationProgram' placeholder='Program'></input>
        <input name='educationUniversity' placeholder='University'></input>
        <input name='educationFrom' placeholder='From'></input>
        <input name='educationTo' placeholder='To'></input>
      </section>
    );
  }
}

export default EducationInput;
