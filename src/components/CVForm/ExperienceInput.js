import React, { Component } from 'react';

const ExperienceInput = () => {
  return (
    <section className='Section__Wrapper'>
      <span className='Section__Title'>Experience</span>
      <input name='experiencePosition' placeholder='Position'></input>
      <input name='experienceCompany' placeholder='Company'></input>
      <input name='experienceCity' placeholder='City'></input>
      <input name='experienceFrom' placeholder='From'></input>
      <input name='experienceTo' placeholder='To'></input>
    </section>
  );
};

export default ExperienceInput;
