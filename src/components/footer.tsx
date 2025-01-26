import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <>
      <div className='bg-gray-900'>
        <footer className=' rounded-t-lg shadow mx-4 bg-gray-800'>
          <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
            <span className='text-sm  sm:text-center text-gray-400'>
              © 2025{" "}
              <Link to={"/"} className='hover:underline'>
                Shafiq
              </Link>
              . All Rights Reserved.
            </span>
            <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0'>
              <li>
                <Link to={"/about"} className='hover:underline me-4 md:me-6'>
                  About
                </Link>
              </li>
              <li>
                <Link to={"/"} className='hover:underline me-4 md:me-6'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to={"/"} className='hover:underline me-4 md:me-6'>
                  Licensing
                </Link>
              </li>
              <li>
                <Link to={"/contact"} className='hover:underline'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FooterSection;
