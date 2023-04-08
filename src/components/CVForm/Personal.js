import React, { Component } from 'react';
import Section from '../Utils/Section';

const PersonalInput = ({ onChangePersonal }) => {
  return (
    <Section title='Personal'>
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

      <input
        name='photo'
        type='file'
        accept='image/*'
        onChange={(e) => onChangePersonal(e)}
      ></input>
    </Section>
  );
};

export default PersonalInput;
