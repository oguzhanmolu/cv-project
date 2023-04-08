import Button from '../Utils/Button';

const ExperienceItem = ({
  id,
  experienceItem,
  onChangeAction,
  onDeleteExperience,
}) => {
  return (
    <>
      <input
        onChange={(e) => onChangeAction(e, id)}
        name='position'
        placeholder='Position'
        value={experienceItem.position}
      ></input>

      <input
        onChange={(e) => onChangeAction(e, id)}
        name='company'
        placeholder='Company'
        value={experienceItem.company}
      ></input>

      <input
        onChange={(e) => onChangeAction(e, id)}
        name='city'
        placeholder='City'
        value={experienceItem.city}
      ></input>

      <input
        onChange={(e) => onChangeAction(e, id)}
        name='from'
        placeholder='from'
        value={experienceItem.from}
      ></input>
      <input
        onChange={(e) => onChangeAction(e, id)}
        name='to'
        placeholder='to'
        value={experienceItem.to}
      ></input>

      <Button text='Delete' onClickAction={() => onDeleteExperience(id)} />
    </>
  );
};

export default ExperienceItem;
