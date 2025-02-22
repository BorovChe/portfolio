export interface IProject {
  id: string;
  logoSrc: string;
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
  icon: string;
  title: string;
  link: string;
  width: number;
  height: number;
}

export interface IStackListProps {
  stack: string[];
}
