import About1 from "../components/about";
import Contact from "../components/contact";
import FooterSection from "../components/footer";
import HeroSection from "../components/herosection";
import Portfolio from "../components/portfolio";

const HomePage = () => {
  return (
    <>
      <div className='bg-gray-900 relative min-h-screen '>
        <HeroSection />
        <div className='w-[100%] overflow-hidden'>
          <About1 />
          <Portfolio />
          <Contact />
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default HomePage;
