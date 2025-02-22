import ProjectItem from './project-item';
import projects from '@/data/projects.json';

const ProjectList = () => {
  return (
    <ul className="flex  flex-col items-center gap-10 even:items-end lg:items-start">
      {projects.map(project => (
        <ProjectItem key={project.title} {...project} />
      ))}
    </ul>
  );
};

export default ProjectList;
