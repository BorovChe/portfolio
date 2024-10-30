import Image from 'next/image';

import Container from '@/components/Container';
import BinaryTree from '@/components/BinaryTree';

import heroPhoto from '../../../public/images/myBudka.jpg';

const Hero = () => {
  return (
    <section
      id="about"
      className="min-h-[770px] bg-[--main-dark-cl] pt-[160px] text-[--main-white-txt-cl]"
    >
      <Container>
        <div className="flex  gap-10">
          <div className="flex  gap-10">
            <div className="min-w-[320px] w-[340px] shadow-custom-border bg-inherit  ">
              <Image src={heroPhoto} alt="Profile photo" priority />
            </div>

            <div>
              <strong className="block mb-4 text-2xl font-medium	tracking-wider	">
                Roman Borovyk
              </strong>
              <h1 className="mb-4 text-2xl font-bold tracking-wider	">
                Full-Stack Developer
              </h1>

              <p className="max-w-[400px] text-base		">
                I work with the React framework, I have been studying this area
                for 1.5 years. I enjoy solving complex technical problems. I
                also prefer vanilla solutions to problems, since they do not
                limit the implementation of non-standard ideas, but if I have a
                clear technical specification, I can deal with any
                documentation. Previously worked in a technical specialty. I
                currently live in Chernigov.
              </p>
            </div>
          </div>
          <div>
            <h3>Technology Stack</h3>
            <BinaryTree />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
