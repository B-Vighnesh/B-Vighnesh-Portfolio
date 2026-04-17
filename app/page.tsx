import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Origin from '@/components/sections/Origin';
import Craft from '@/components/sections/Craft';
import Work from '@/components/sections/Work';
import Vision from '@/components/sections/Vision';
import Contact from '@/components/sections/Contact';
import SectionWrapper from '@/components/layout/SectionWrapper';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" aria-label="Portfolio main content">
        <SectionWrapper id="hero-wrapper" bgVar="--hero-bg">
          <Hero />
        </SectionWrapper>

        <SectionWrapper id="origin-wrapper" bgVar="--origin-bg">
          <Origin />
        </SectionWrapper>

        <SectionWrapper id="craft-wrapper" bgVar="--craft-bg">
          <Craft />
        </SectionWrapper>

        <SectionWrapper id="work-wrapper" bgVar="--work-bg">
          <Work />
        </SectionWrapper>

        <SectionWrapper id="vision-wrapper" bgVar="--vision-bg">
          <Vision />
        </SectionWrapper>

        <SectionWrapper id="contact-wrapper" bgVar="--contact-bg">
          <Contact />
        </SectionWrapper>
      </main>
    </>
  );
}
