import Container from '@/components/UI/container';
import ProjectList from '@/components/projects/project-list';
import SectionTitle from '@/components/UI/section-title';
import TitleUnderline from '@/components/UI/title-underline';

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <Container>
        <SectionTitle color="second-dark-cl" position="left">
          Projects
        </SectionTitle>
        <TitleUnderline color="second-dark-cl" />
        <ProjectList />
      </Container>
    </section>
  );
};

export default Projects;
