import { Footer, Navbar } from '../components';
import { About, Skills, Hero, Projects, Leetcode, Contact } from '../sections';

const Page = () => (
  <div className=' bg-primary-black'>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Leetcode />
    <Projects />
    <Contact />
    <Footer />
  </div>
);

export default Page;
