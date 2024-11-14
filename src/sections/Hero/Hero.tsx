import Image from 'next/image';

import Container from '@/components/Container';
import DirectionList from '@/components/Stack/DirectionList';

import heroPhoto from '../../../public/images/myBudka.jpg';

const Hero = () => {
  return (
    <section
      id="about"
      className="min-h-[770px] bg-[--main-dark-cl] pt-[204px] pb-[126px] text-[--main-white-txt-cl]"
    >
      <Container>
        <div className="flex  gap-16">
          <div className="flex  gap-10">
            <div className="min-w-[320px] w-[340px] shadow-custom-border bg-inherit  ">
              <Image src={heroPhoto} alt="Profile photo" priority={true} />
            </div>
            <div className="flex flex-col gap-6">
              <strong className="block text-4xl font-medium	tracking-wider">
                Roman Borovyk
              </strong>
              <h1 className="text-4xl font-bold tracking-wider">
                Full-Stack Developer
              </h1>
              <p className="max-w-[514px] mt-auto text-base">
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
          <div className="max-w-[514px] flex flex-col gap-8 items-center">
            <DirectionList />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
