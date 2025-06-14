import { Helmet } from "react-helmet";
import About1 from "../components/about";
import Contact from "../components/contact";
import FooterSection from "../components/footer";
import HeroSection from "../components/herosection";
import Portfolio from "../components/portfolio";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>
          Musinguzi Shafiq – Freelance Web Developer | React, Tailwind, Node
        </title>
        <meta
          name='description'
          content="I'm Musinguzi Shafiq, a freelance full-stack developer using React, Tailwind CSS, TypeScript, Node.js, and MongoDB to build modern websites for global clients."
        />
        <link rel='canonical' href='https://www.shafiquedev256.tech/' />
      </Helmet>

      <main className='bg-gray-900 relative min-h-screen '>
        <HeroSection />
        <div className='w-[100%] overflow-hidden'>
          <About1 />
          <Portfolio />
          <Contact />
        </div>
      </main>
      <FooterSection />
    </>
  );
};

export default HomePage;
