import Section from '../Utils/Section';

// Personal Input section
const PersonalInput = ({ personalInfo, onChangePersonal }) => {
  return (
    <Section title='Personal'>
      <input
        onChange={(e) => onChangePersonal(e)}
        name='name'
        type='text'
        placeholder='Name'
        value={personalInfo.name}
      ></input>

      <input
        onChange={(e) => onChangePersonal(e)}
        name='title'
        type='text'
        placeholder='Title'
        value={personalInfo.title}
      ></input>

      <input
        onChange={(e) => onChangePersonal(e)}
        name='phone'
        type='text'
        placeholder='Phone'
        value={personalInfo.phone}
      ></input>

      <input
        onChange={(e) => onChangePersonal(e)}
        name='email'
        type='text'
        placeholder='Email'
        value={personalInfo.email}
      ></input>

      <input
        onChange={(e) => onChangePersonal(e)}
        name='address'
        type='text'
        placeholder='Address'
        value={personalInfo.address}
      ></input>

      <textarea
        onChange={(e) => {
          onChangePersonal(e);
        }}
        name='description'
        rows={5}
        maxLength='300'
        placeholder='Description...'
        value={personalInfo.description}
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
