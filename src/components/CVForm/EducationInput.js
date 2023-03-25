import styled from 'styled-components';

const EducationInput = ({
  setInputState,
  setProgram,
  setUniversity,
  setUniEntrance,
  setUniGraduation,
  setUniNotes,
}) => {
  return (
    <section className='Section__Wrapper'>
      <span className='Section__Title'>Education</span>

      <input
        onChange={(e) => setInputState(e, setUniversity)}
        name='educationUniversity'
        placeholder='University'
      ></input>

      <input
        onChange={(e) => setInputState(e, setProgram)}
        name='educationProgram'
        placeholder='Program'
      ></input>

      <input
        onChange={(e) => setInputState(e, setUniEntrance)}
        name='educationFrom'
        placeholder='From'
      ></input>

      <input
        onChange={(e) => setInputState(e, setUniGraduation)}
        name='educationTo'
        placeholder='To'
      ></input>

      <textarea
        onChange={(e) => setInputState(e, setUniNotes)}
        rows={3}
        maxLength='150'
        placeholder='Notes...'
      ></textarea>
    </section>
  );
};

export default EducationInput;
