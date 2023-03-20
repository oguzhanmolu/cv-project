import React, { Component } from 'react';

class PersonalInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='Section__Wrapper'>
        <span className='Section__Title'>Personal</span>
        <input name='personalName' type='text' placeholder='Name'></input>
        <input name='personalTitle' type='text' placeholder='Title'></input>
        <input name='personalPhone' type='text' placeholder='Phone'></input>
        <input name='personalEmail' type='text' placeholder='Email'></input>
        <input name='personalAddress' type='text' placeholder='Address'></input>
        <textarea
          name='personalDescription'
          rows={3}
          maxLength='150'
          placeholder='Description...'
        />
      </section>
    );
  }
}

export default PersonalInput;
