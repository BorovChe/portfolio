import Container from '@/components/UI/Container';
import ProjectList from '@/components/Projects/ProjectList';

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <Container>
        <h2 className="text-[32px] mb-2 font-medium tracking-wider uppercase">
          Projects
        </h2>
        <div className="h-1 w-full bg-black mb-10"></div>
        <ProjectList />
      </Container>
    </section>
  );
};

export default Projects;
