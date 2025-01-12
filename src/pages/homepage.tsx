import About1 from "../components/about";
import Contact from "../components/contact";
import HeroSection from "../components/herosection";
import Portfolio from "../components/portfolio";

const HomePage = () => {
  return (
    <>
      <div className='bg-gray-900 relative '>
        <HeroSection />
        <div className='w-[100%] overflow-hidden'>
          <Portfolio />
          <About1 />
          <Contact />
        </div>

        <footer className=' rounded-t-lg shadow m-4 bg-gray-800'>
          <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
            <span className='text-sm  sm:text-center text-gray-400'>
              © 2023{" "}
              <a href='/' className='hover:underline'>
                Shafiq
              </a>
              . All Rights Reserved.
            </span>
            <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0'>
              <li>
                <a href='#' className='hover:underline me-4 md:me-6'>
                  About
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline me-4 md:me-6'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline me-4 md:me-6'>
                  Licensing
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
