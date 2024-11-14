import Header from '@/layout/Header';
import Footer from '@/layout/Footer';
import Contacts from '@/sections/Contacts';
import Projects from '@/sections/Projects';
import Hero from '@/sections/Hero';
import Education from '@/sections/Education';
import Container from '@/components/Container';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <div className="bg-[--main-dark-cl]">
        <Container>
          <div className="flex gap-8">
            <Contacts />
            <Education />
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
