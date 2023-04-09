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
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ex culpa cumque velit soluta, nobis recusandae. Ipsam minus eum dignissimos aliquam possimus iste eveniet similique, non, nulla eius maxime consectetur soluta atque debitis doloremque iure ipsum nisi illo aspernatur ducimus?',

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
