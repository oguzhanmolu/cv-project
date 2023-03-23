const PersonalPreview = ({
  name,
  title,
  phone,
  email,
  address,
  description,
}) => {
  return (
    <>
      <h1>{name}</h1>
      <h1>{title}</h1>
      <h1>{phone}</h1>
      <h1>{email}</h1>
      <h1>{address}</h1>
      <h1>{description}</h1>
    </>
  );
};

export default PersonalPreview;
