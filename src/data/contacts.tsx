import {
  email,
  telegramm,
  linkedin,
  gitHubLight,
  location,
} from '../../public/icons';

interface IContacts {
  id: string;
  path: string;
  title: string;
  width: number;
  height: number;
}

export const contacts: IContacts[] = [
  {
    id: 'email',
    path: email,
    title: 'roman2000borov@gmail.com',
    width: 26,
    height: 26,
  },
  {
    id: 'telegram',
    path: telegramm,
    title: '@BorovChe',
    width: 24,
    height: 24,
  },
  {
    id: 'linkedin',
    path: linkedin,
    title: 'Linkedin',
    width: 24,
    height: 24,
  },
  {
    id: 'gitHub',
    path: gitHubLight,
    title: 'GitHub',
    width: 24,
    height: 24,
  },
  {
    id: 'location',
    path: location,
    title: 'Ukraine Chernihiv/Kyiv',
    width: 24,
    height: 24,
  },
];
