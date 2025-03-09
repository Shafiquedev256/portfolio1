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
      <div className='w-full h-full  '>
        <div className='h-full w-full my-6 py-20 mx-auto relative top-12 xl:px-16 px-8  flex md:flex-row flex-col gap-4 justify-center items-center pb-10 pt-4'>
          <div className='w-full pb-10 relative'>
            <img
              className='shadow-2xl  shadow-green-600 animate-[spin_5s_linear_infinite] absolute left-0 right-0 rounded-full lg:max-w-[70%] max-w-[60%] mx-auto'
              src='/me.png'
              alt='My Image'
            />
            <img
              className='relative z-10 imgbg  rounded-full lg:max-w-[70%] max-w-[60%] mx-auto outline outline-[.7rem] outline-offset-[.1rem] outline-green-400/30'
              src='/me.png'
              alt='My Image'
            />
          </div>
          <div className='w-full  font-body flex flex-col justify-center gap-4 md:text-left text-center text-white dark:text-gray-800 md:mt-0 sm:mt-8 mt-4'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-semibold tracking-wider font-custom'>
              Hello, I'm Musinguzi Shafiq
            </h1>
            <h3 className='text-lg text-green-400 flex flex-row space-x-3'>
              <span>I'm a </span>
              <span className='typing text-green-500  '>
                <TypewriterEffect />
              </span>
            </h3>
            <p className='text-lg'>
              Experienced website developer with 2+ years of expertise in
              ReactJs, TailwindCSS, ExpressJs, Nodejs, MongoDB.
            </p>
            <div className='flex justify-center items-center'>
              <button
                onClick={handleWhatsAppRedirect}
                className='px-6 py-2 font-semibold space-x-2 items-center flex flex-row text-center bg-green-600 text-white rounded-sm'
              >
                <svg
                  fill='currentColor'
                  width='28px'
                  height='28px'
                  viewBox='0 0 256 256'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M128.00049,28A100.02594,100.02594,0,0,0,41.11475,177.53908l-9.0044,31.51661a11.99971,11.99971,0,0,0,14.835,14.834l31.5166-9.00391A100.00677,100.00677,0,1,0,128.00049,28Zm0,192a91.87082,91.87082,0,0,1-46.95264-12.86719,3.99494,3.99494,0,0,0-3.14355-.4082l-33.15723,9.47363a3.99979,3.99979,0,0,1-4.94434-4.94531l9.47266-33.15625a4.00111,4.00111,0,0,0-.4082-3.14355A92.01077,92.01077,0,1,1,128.00049,220Zm50.51123-73.457-20.45947-11.69141a12.01054,12.01054,0,0,0-12.12745.12891l-13.80664,8.28418a44.04183,44.04183,0,0,1-19.38232-19.38281l8.28369-13.80664a12.0108,12.0108,0,0,0,.12891-12.127l-11.69092-20.46A10.91584,10.91584,0,0,0,100,72a32.00811,32.00811,0,0,0-32,31.88086A84.001,84.001,0,0,0,151.999,188h.12012A32.00842,32.00842,0,0,0,184,156,10.913,10.913,0,0,0,178.51172,146.543ZM152.10791,180h-.1084A75.99972,75.99972,0,0,1,76,103.8926,23.997,23.997,0,0,1,100,80a2.89975,2.89975,0,0,1,2.51172,1.457L114.20264,101.918a4.00418,4.00418,0,0,1-.043,4.042l-9.38916,15.64844a3.9987,3.9987,0,0,0-.21826,3.69824,52.04112,52.04112,0,0,0,26.1416,26.1416,3.99707,3.99707,0,0,0,3.69873-.21875L150.04,141.84084a4.006,4.006,0,0,1,4.043-.04394l20.46045,11.69238A2.89712,2.89712,0,0,1,176,156,23.99725,23.99725,0,0,1,152.10791,180Z' />
                </svg>
                <span> Get In Touch</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
