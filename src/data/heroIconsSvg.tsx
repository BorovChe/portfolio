import {
  js,
  react,
  node,
  next,
  redux,
  express,
  mongodb,
} from '../../public/icons';

interface IHeroIcon {
  id: string;
  path: string;
  width: number;
  height: number;
}

export const heroIcons: IHeroIcon[] = [
  { id: 'js', path: js, width: 26, height: 25 },
  { id: 'react', path: react, width: 32, height: 28 },
  { id: 'node', path: node, width: 32, height: 21 },
  { id: 'next', path: next, width: 33, height: 15 },
  { id: 'redux', path: redux, width: 26, height: 25 },
  { id: 'express', path: express, width: 39, height: 11 },
  { id: 'mongodb', path: mongodb, width: 37, height: 9 },
];
