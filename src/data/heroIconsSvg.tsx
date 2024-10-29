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
  path: string;
  width: number;
  height: number;
}

export const heroIcons: IHeroIcon[] = [
  { path: js, width: 26, height: 25 },
  { path: react, width: 32, height: 28 },
  { path: node, width: 32, height: 21 },
  { path: next, width: 33, height: 15 },
  { path: redux, width: 26, height: 25 },
  { path: express, width: 39, height: 11 },
  { path: mongodb, width: 37, height: 9 },
];
