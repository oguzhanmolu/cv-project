import { v4 as uuidv4 } from 'uuid';
import placeholderPhoto from '/home/oguzhanmolu/repos/cv-project/src/assets/portrait-placeholder.jpg';

const emptyCV = {
  personalInfo: {
    name: '',
    title: '',
    address: '',
    phone: '',
    email: '',
    description: '',
    photo: placeholderPhoto,
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
