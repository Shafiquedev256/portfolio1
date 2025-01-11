import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className='bg-gray-900 dark:bg-gray-200 z-50 sticky top-0 lg:px-16 px-4 flex flex-wrap items-center py-4 bg-gray-850 shadow-md'>
      <div className='flex-1 flex justify-between items-center'>
        <Link
          to='/'
          className=' font-bold font-custom text-2xl text-white tracking-wide'
        >
          Shafiq.
        </Link>
      </div>
      <label
        className='cursor-pointer md:hidden block'
        onClick={() => {
          setOpen((state) => !state);
        }}
      >
        <svg
          className='fill-current text-gray-200'
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 20 20'
        >
          <title>menu</title>
          <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
        </svg>
      </label>
      <input className='hidden' type='checkbox' id='menu-toggle' />

      <div
        className='hidden md:flex md:items-center md:w-auto w-full'
        id='menu'
      >
        <nav>
          <ul className='md:flex items-center font-semibold justify-between text-base text-gray-100 dark:text-gray-600 pt-4 md:pt-0'>
            <li>
              <Link
                className='md:p-4 py-3 px-0 block hover:text-rose-500'
                to='/portfolio'
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                className='md:p-4 py-3 px-0 block hover:text-rose-500'
                to='/about'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className='md:p-4 py-3 px-0 block hover:text-rose-500 active:text-rose-500'
                to='/contact'
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
