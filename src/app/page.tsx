import Contacts from '@/sections/contacts';
import Projects from '@/sections/projects';
import Hero from '@/sections/hero';
import Education from '@/sections/education';
import Container from '@/components/UI/container';
import ScrollToTop from '@/components/scroll-to-top';

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <div className="bg-[--main-dark-cl]">
        <Container>
          <div className="flex flex-col lg:flex-row lg:gap-8 ">
            <Contacts />
            <Education />
          </div>
        </Container>
      </div>
      <ScrollToTop />
    </main>
  );
}
