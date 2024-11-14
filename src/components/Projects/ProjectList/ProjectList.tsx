import { IProject } from '@/common/types';
import ProjectItem from '../ProjectItem';

import projects from '@/data/projects';

const ProjectList = () => {
  return (
    <ul className="flex  flex-col  gap-10 even:items-end">
      {projects.map(({ logoSrc, title, type, stack }: IProject) => (
        <ProjectItem
          key={title}
          logoSrc={logoSrc}
          title={title}
          type={type}
          stack={stack}
        />
      ))}
    </ul>
  );
};

export default ProjectList;
