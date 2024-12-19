import { StaticImageData } from 'next/image';

export interface IProject {
  logoSrc: StaticImageData;
  title: string;
  type: string;
  stack: string[];
}

export interface IDirection {
  title: string;
  technologies: string[];
}

export interface IContact {
  id: string;
  path: string;
  title: string;
  link: string;
  width: number;
  height: number;
}

export interface IStackListProps {
  stack: string[];
}
