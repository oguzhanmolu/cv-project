import React, { Component } from 'react';

const PersonalInput = ({
  setName,
  setTitle,
  setPhone,
  setEmail,
  setAddress,
  setDescription,
}) => {
  const setInputState = (event, setStateFunction) => {
    setStateFunction(event.target.value);
  };

  const test = (e) => {
    e.preventDefault();
    console.log('test');
  };

  return (
    <section className='Section__Wrapper'>
      <span id='First__Section__Title'>Personal</span>

      <input
        onChange={(e) => setInputState(e, setName)}
        name='personalName'
        type='text'
        placeholder='Name'
      ></input>

      <input
        onChange={(e) => setInputState(e, setTitle)}
        name='personalTitle'
        type='text'
        placeholder='Title'
      ></input>

      <input
        onChange={(e) => setInputState(e, setPhone)}
        name='personalPhone'
        type='text'
        placeholder='Phone'
      ></input>

      <input
        onChange={(e) => setInputState(e, setEmail)}
        name='personalEmail'
        type='text'
        placeholder='Email'
      ></input>

      <input
        onChange={(e) => setInputState(e, setAddress)}
        name='personalAddress'
        type='text'
        placeholder='Address'
      ></input>

      <textarea
        onChange={(e) => {
          setInputState(e, setDescription);
        }}
        name='personalDescription'
        rows={5}
        maxLength='300'
        placeholder='Description...'
      />

      <input id='input-img' type='file' accept='image/*'></input>
    </section>
  );
};

export default PersonalInput;
