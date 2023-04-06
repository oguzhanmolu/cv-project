import { v4 as uuidv4 } from 'uuid';

const emptyCV = {
  personalInfo: {
    name: 'John Wick',
    title: 'React Developer',
    address: 'London, UK',
    phone: '123456789',
    email: 'johnwick@gmail.com',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ligula enim, congue sagittis mi placerat, fermentum ullamcorper lorem. Phasellus vel est enim. Nulla vestibulum lacus sed venenatis finibus. Duis tincidunt at magna quis eleifend. Ut ultrices justo quis porttitor pretium. Nunc ultrices, mauris suscipit placerat ornare, leo neque molestie lectus, eget aliquam massa sem vitae lectus. In id eleifend nibh. ',
  },
  education: [
    {
      id: uuidv4(),
      universityName: '',
      city: '',
      degree: '',
      subject: '',
      from: '',
      to: '',
    },
  ],
  experience: [
    {
      id: uuidv4(),
      position: '',
      company: '',
      city: '',
      from: '',
      to: '',
    },
  ],
};

export default emptyCV;
