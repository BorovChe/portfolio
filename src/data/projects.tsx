import {
  barberSrc,
  filmotekaSrc,
  healthyHubSrc,
  staffManagementSrc,
} from '../../public/images/';

import { IProject } from '@/common/types';

const projects: IProject[] = [
  {
    logoSrc: staffManagementSrc,
    title: 'Staff Management',
    type: 'Full-Stack App',
    stack: [
      'React',
      'Router',
      'Redux',
      'React Hook Form',
      'Yup',
      'I18n',
      'Pagination',
      'Axios',
      'ExpressJS',
      'Node.js',
      'MongoDB',
      'Emotion',
      'Webpack',
    ],
  },
  {
    logoSrc: healthyHubSrc,
    title: 'HealthyHub',
    type: 'Full-Stack App',
    stack: [
      'React',
      'Router',
      'Redux',
      'Formik',
      'Yup',
      'Axios',
      'ExpressJS',
      'Node.js',
      'MongoDB',
      'Styled Component',
      'Adaptive Web Design',
      'Responsive Design',
      'Webpack',
    ],
  },
  {
    logoSrc: filmotekaSrc,
    title: 'Filmoteka',
    type: 'Front-End App',
    stack: [
      'HTML',
      'SCSS',
      'Type Script',
      'Pagination',
      'Firebase',
      'Axios',
      'API Integration',
      'Adaptive Web Design',
      'Responsive Design',
      'Parcel',
    ],
  },
  {
    logoSrc: barberSrc,
    title: 'Barbershop',
    type: 'Landing Page',
    stack: [
      'HTML',
      'SCSS',
      'Java Script',
      'Adaptive Web Design',
      'Responsive Design',
    ],
  },
];

export default projects;
