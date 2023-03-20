import React, { Component } from 'react';

class ExperienceInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='Section__Wrapper'>
        <span className='Section__Title'>Experience</span>
        <input placeholder='Position'></input>
        <input placeholder='Company'></input>
        <input placeholder='City'></input>
        <input placeholder='From'></input>
        <input placeholder='To'></input>
      </section>
    );
  }
}

export default ExperienceInput;
