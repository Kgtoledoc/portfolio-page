import About from '@/components/about';
import Intro from '@/components/intro';
import Projects from '@/components/projects';
import SectionDivider from '@/components/section-divider';

const Home = () => (
  <main className='flex flex-col items-center px-4 '>
    <Intro/>
    <SectionDivider/>
    <About/>
    <Projects></Projects>
  </main>
);

export default Home;
