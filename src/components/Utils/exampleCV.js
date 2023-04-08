import { v4 as uuidv4 } from 'uuid';
import examplePhoto from '/home/oguzhanmolu/repos/cv-project/src/assets/example-photo.png';

const exampleCV = {
  personalInfo: {
    name: 'John Smith',
    title: 'React Developer',
    address: 'Los Angeles, USA',
    phone: '+353 1234-9911',
    email: 'johnsmithnotme@gmail.com',
    description:
      'Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    photo: examplePhoto,
  },
  education: [
    {
      id: uuidv4(),
      uniName: 'University of London',
      city: 'London',
      degree: 'Bachelor degree',
      subject: 'Computer Science',
      from: '2013',
      to: '2017',
    },
    {
      id: uuidv4(),
      uniName: 'University of London',
      city: 'London',
      degree: 'Master degree',
      subject: 'Computer Science',
      from: '2017',
      to: '2019',
    },
  ],
  experience: [
    {
      id: uuidv4(),
      position: 'Junior Web developer',
      company: 'Google LLC',
      city: 'London',
      from: '2019',
      to: '2020',
    },
    {
      id: uuidv4(),
      position: 'React developer',
      company: 'Team Ace ',
      city: 'New York',
      from: '2020',
      to: '2023',
    },
    {
      id: uuidv4(),
      position: 'Senior React developer',
      company: 'Meta',
      city: 'Los Angeles',
      from: '2023',
      to: 'Present',
    },
  ],
};

export default exampleCV;
