import styled from 'styled-components';

const ExperienceInput = ({
  setInputState,
  setCompanyPosition,
  setCompanyName,
  setCompanyLocation,
  setCompanyEntrance,
  setCompanyLeft,
  setCompanyNotes,
}) => {
  return (
    <section className='Section__Wrapper'>
      <span className='Section__Title'>Experience</span>
      <input
        onChange={(e) => setInputState(e, setCompanyPosition)}
        name='experiencePosition'
        placeholder='Position'
      ></input>

      <input
        onChange={(e) => setInputState(e, setCompanyName)}
        name='experienceCompany'
        placeholder='Company'
      ></input>

      <input
        onChange={(e) => setInputState(e, setCompanyLocation)}
        name='experienceCity'
        placeholder='City'
      ></input>

      <input
        onChange={(e) => setInputState(e, setCompanyEntrance)}
        name='experienceFrom'
        placeholder='From'
      ></input>

      <input
        onChange={(e) => setInputState(e, setCompanyLeft)}
        name='experienceTo'
        placeholder='To'
      ></input>

      <textarea
        onChange={(e) => setInputState(e, setCompanyNotes)}
        rows={3}
        maxLength='150'
        placeholder='Notes...'
      ></textarea>
    </section>
  );
};

export default ExperienceInput;
