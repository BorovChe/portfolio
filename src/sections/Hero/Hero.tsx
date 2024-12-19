import Container from '@/components/UI/Container';
import DirectionList from '@/components/Stack/DirectionList';
import HeroImage from '@/components/HeroImage/HeroImage';

const Hero = () => {
  return (
    <section
      id="about"
      className="bg-[--main-dark-cl] pt-[106px] pb-[38px]  xl:pt-[122px] xl:pb-[44px]  2xl:pt-[202px] 2xl:pb-[124px] text-[--main-white-txt-cl]"
    >
      <Container>
        <div className="flex flex-col items-center 2xl:flex-row xl:items-start gap-12 2xl:gap-16">
          <div className="flex flex-col md:flex-row gap-10">
            <HeroImage />
            <div className="flex flex-col gap-6 md:gap-3 lg:gap-6">
              <strong className="block text-4xl font-medium	tracking-wider">
                Roman Borovyk
              </strong>
              <h1 className="text-4xl md:text-[28px] lg:text-4xl font-bold tracking-wider">
                Full-Stack Developer
              </h1>
              <p className="xl:max-w-[700px] 2xl:max-w-[514px] mt-auto text-base">
                Technical Expertise: Proficient in TypeScript, JavaScript, with
                experience in front-end frameworks like Next.js and React.js,
                and libraries such as TailwindCSS, MUI, Emotion. Skilled in
                back-end development with Node.js, Express, MongoDB for building
                robust APIs. I have been studying this area for 2 years and
                enjoy solving complex technical problems. I prefer vanilla
                solutions as they provide flexibility for implementing unique
                ideas. However, if there is a clear technical specification, I
                can easily work with any documentation. Previously, I worked in
                a technical field.
              </p>
            </div>
          </div>
          <DirectionList />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
