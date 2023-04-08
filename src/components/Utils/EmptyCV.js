import { v4 as uuidv4 } from 'uuid';

const emptyCV = {
  personalInfo: {
    name: '',
    title: '',
    address: '',
    phone: '',
    email: '',
    description: '',
  },
  education: [
    {
      id: uuidv4(),
      uniName: '',
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
