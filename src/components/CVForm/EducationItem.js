import Button from '../Utils/Button';

const EducationItem = ({ educationItem, id, onChangeAction }) => {
  return (
    <>
      <input
        onChange={(e) => onChangeAction(e, id)}
        name='uniName'
        placeholder='University'
        value={educationItem.uniName}
      ></input>

      <input
        onChange={(e) => onChangeAction(e, id)}
        name='city'
        placeholder='City'
        value={educationItem.city}
      ></input>

      <input
        onChange={(e) => onChangeAction(e, id)}
        name='degree'
        placeholder='Degree'
        value={educationItem.degree}
      ></input>

      <input
        onChange={(e) => onChangeAction(e, id)}
        name='subject'
        placeholder='Subject'
        value={educationItem.subject}
      ></input>
      <input
        onChange={(e) => onChangeAction(e, id)}
        name='from'
        placeholder='From'
        value={educationItem.from}
      ></input>
      <input
        onChange={(e) => onChangeAction(e, id)}
        name='to'
        placeholder='To'
        value={educationItem.to}
      ></input>
      <Button text='Delete' />
    </>
  );
};

export default EducationItem;
