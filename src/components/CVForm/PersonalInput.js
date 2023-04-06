import React, { Component } from 'react';
import InputSection from '../Utils/InputSection';

const PersonalInput = ({ onChangePersonal }) => {
  return (
    <InputSection title='Personal'>
      <input
        onChange={(e) => onChangePersonal(e)}
        name='name'
        type='text'
        placeholder='Name'
      ></input>

      <input
        onChange={(e) => onChangePersonal(e)}
        name='title'
        type='text'
        placeholder='Title'
      ></input>

      <input
        onChange={(e) => onChangePersonal(e)}
        name='phone'
        type='text'
        placeholder='Phone'
      ></input>

      <input
        onChange={(e) => onChangePersonal(e)}
        name='email'
        type='text'
        placeholder='Email'
      ></input>

      <input
        onChange={(e) => onChangePersonal(e)}
        name='address'
        type='text'
        placeholder='Address'
      ></input>

      <textarea
        onChange={(e) => {
          onChangePersonal(e);
        }}
        name='description'
        rows={5}
        maxLength='300'
        placeholder='Description...'
      />

      <input id='input-img' type='file' accept='image/*'></input>
    </InputSection>
  );
};

export default PersonalInput;
