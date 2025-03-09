import { useScroll, motion, useTransform } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import img2 from "../assets/openflow .png";
import img3 from "../assets/sitigym.png";
const Portfolio = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.1 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <>
      <section className='pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] text-white font-body'>
        <div className='container mx-auto'>
          <div className='flex flex-wrap -mx-4'>
            <div className='w-full flex flex-col justify-center items-center px-4'>
              <motion.div
                ref={ref}
                style={{
                  scale: scaleProgress,
                  opacity: opacityProgress,
                }}
                className=' mb-[60px] max-w-[510px] text-center'
              >
                <span className='text-primary mb-2 block text-lg font-semibold '>
                  My Portfolio
                </span>
                <h2 className='font-custom mb-3 text-green-500 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]'>
                  My Recent Projects
                </h2>
                <p className=' text-center mx-2 dark:text-dark-6'>
                  The following projects showcase the creative and innovative
                  solutions I developed for some of my satisfied clients. Each
                  project reflects my commitment to understanding their unique
                  needs, delivering high-quality results, and exceeding
                  expectations.
                </p>
              </motion.div>
            </div>
          </div>

          <div className='w-full flex flex-wrap justify-center -mx-4'>
            <div className='w-full px-4'></div>
          </div>
          <div className='flex flex-wrap items-center justify-center -mx-4'>
            {/**  <PortfolioCard
              ImageHref={img1}
              category='Video Games E-commerce'
              title='S.M Games'
              button='View Details'
              buttonHref='/details/project-1'
            />*/}

            <PortfolioCard
              ImageHref={img2}
              category='Logistics website'
              title='Open Flow Logistics'
              button='View Details'
              buttonHref='/details/project-2'
            />
            <PortfolioCard
              ImageHref={img3}
              category='GYM Website'
              title='Siti gym Kampala'
              button='View Details'
              buttonHref='/details/project-1'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

const PortfolioCard = ({
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.1 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <>
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
        className={"w-[90%] px-4 md:w-1/2 xl:w-1/3 h-[250px] my-11"}
      >
        <div className='relative mb-12'>
          <div className='overflow-hidden rounded-[10px] h-[200px]'>
            <img src={ImageHref} alt='portfolio' className='w-full h-[200px]' />
          </div>
          <div className='relative z-10 mx-7 -mt-10  rounded-lg bg-gray-800  py-[20px] px-2 text-center '>
            <span className='text-primary text-green-500 mb-2 block text-sm font-medium'>
              {category}
            </span>
            <h3 className='text-dark dark:text-white mb-5 text-xl font-bold'>
              {title}
            </h3>
            <Link
              to={buttonHref}
              className='text-body-color dark:text-dark-6 hover:border-green-500 hover:bg-green-500 inline-block rounded-md border border-stroke border-green-500  py-[10px] px-7 text-sm font-medium transition hover:text-white'
            >
              {button}
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};
