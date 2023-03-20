import React, { Component } from 'react';

class PersonalInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='Section__Wrapper'>
        <span className='Section__Title'>Personal</span>
        <input type='text' placeholder='Name'></input>
        <input type='text' placeholder='Title'></input>
        <input type='text' placeholder='Phone'></input>
        <input type='text' placeholder='Email'></input>
        <input type='text' placeholder='Address'></input>
        <textarea rows={4} placeholder='Description...' />
      </section>
    );
  }
}

export default PersonalInput;
