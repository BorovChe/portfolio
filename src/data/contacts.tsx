import { IContact } from '@/common/types';

import {
  email,
  telegramm,
  linkedin,
  gitHubLight,
  location,
} from '../../public/icons';

export const contacts: IContact[] = [
  {
    id: 'email',
    path: email,
    title: 'roman2000borov@gmail.com',
    link: 'mailto:roman2000borov@gmail.com',
    width: 26,
    height: 26,
  },
  {
    id: 'telegram',
    path: telegramm,
    title: '@BorovChe',
    link: 'https://t.me/BorovChe',
    width: 24,
    height: 24,
  },
  {
    id: 'linkedin',
    path: linkedin,
    title: 'Linkedin',
    link: 'https://www.linkedin.com/in/roman-borovyk/',
    width: 24,
    height: 24,
  },
  {
    id: 'gitHub',
    path: gitHubLight,
    title: 'GitHub',
    link: 'https://github.com/BorovChe',
    width: 24,
    height: 24,
  },
  {
    id: 'location',
    path: location,
    title: 'Ukraine Chernihiv/Kyiv',
    link: 'https://www.google.com.ua/maps/@51.4914913,31.2948793,15.67z?hl=ru&entry=ttu&g_ep=EgoyMDI0MTIwOS4wIKXMDSoASAFQAw%3D%3D',
    width: 24,
    height: 24,
  },
];
