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
