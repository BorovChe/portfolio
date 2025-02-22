interface IProjectDetailsProps {
  params: Promise<{
    slug: string;
  }>;
}

const ProjectDetails = async ({ params }: IProjectDetailsProps) => {
  const { slug } = await params;

  return (
    <main>
      <h1>{slug}</h1>
    </main>
  );
};

export default ProjectDetails;
