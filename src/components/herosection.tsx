import Header from "./header";
import { TypewriterEffect } from "./typingeffect";

const HeroSection = () => {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "+256394772051";
    const message = "Hello Shafiq!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };
  return (
    <>
      <Header />
      <div className='w-full h-full bg-gray-900 dark:bg-gray-200 '>
        <div className='h-full w-full my-6 py-20 mx-auto relative top-12 xl:px-16 px-8  flex md:flex-row flex-col gap-4 justify-center items-center pb-10 pt-4'>
          <div className='w-full pb-10 relative'>
            <img
              className='shadow-2xl shadow-rose-600 animate-[spin_5s_linear_infinite] absolute left-0 right-0 rounded-full lg:max-w-[70%] max-w-[60%] mx-auto'
              src='https://techakim.com/sam/tg/7268/li/imgs/profile.jpg'
              alt='My Image'
            />
            <img
              className='relative z-10 rounded-full lg:max-w-[70%] max-w-[60%] mx-auto outline outline-[.7rem] outline-offset-[.1rem] outline-rose-400/30'
              src='https://techakim.com/sam/tg/7268/li/imgs/profile.jpg'
              alt='My Image'
            />
          </div>
          <div className='w-full  font-body flex flex-col justify-center gap-4 md:text-left text-center text-white dark:text-gray-800 md:mt-0 sm:mt-8 mt-4'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-semibold tracking-wider font-custom'>
              Hello, I'm Musinguzi Shafiq
            </h1>
            <h3 className='text-lg text-rose-400 flex flex-row space-x-3'>
              <span>I'm a </span>
              <span className='typing text-green-500 dark:text-green-700'>
                <TypewriterEffect />
              </span>
            </h3>
            <p className='text-lg'>
              Experienced website developer with 2+ years of expertise in
              ReactJs, TailwindCSS, ExpressJs, Nodejs, MongoDB, and some Flutter
              experience.
            </p>
            <div className='sm:mt-4 mt-2 my-8'>
              <button
                onClick={handleWhatsAppRedirect}
                className='px-6 py-2 font-semibold text-center bg-rose-600 text-white rounded-sm'
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
