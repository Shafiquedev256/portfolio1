import { useScroll, motion, useTransform } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";

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
                <span className='text-primary mb-2 block text-lg font-semibold text-rose-500'>
                  My Portfolio
                </span>
                <h2 className='font-custom mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]'>
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
            <PortfolioCard
              ImageHref='https://i.ibb.co/64WfFPt/image-01.jpg'
              category='Branding'
              title='Creative Agency'
              button='View Details'
              buttonHref='#'
            />
            <PortfolioCard
              ImageHref='https://i.ibb.co/PT7ghRs/image-06.jpg'
              category='marketing'
              title='Creative Agency'
              button='View Details'
              buttonHref='#'
            />
            <PortfolioCard
              ImageHref='https://i.ibb.co/vkt8C1P/image-02.jpg'
              category='marketing'
              title='Creative Agency'
              button='View Details'
              buttonHref='#'
            />
            <PortfolioCard
              ImageHref='https://i.ibb.co/3FKqS1G/image-03.jpg'
              category='Development'
              title='Creative Agency'
              button='View Details'
              buttonHref='#'
            />
            <PortfolioCard
              ImageHref='https://i.ibb.co/m6dq2fX/image-04.jpg'
              category='Design'
              title='Creative Agency'
              button='View Details'
              buttonHref='#'
            />
            <PortfolioCard
              ImageHref='https://i.ibb.co/mCPjBsH/image-05.jpg'
              category='Marketing'
              title='Creative Agency'
              button='View Details'
              buttonHref='#'
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
        className={"w-[90%] px-4 md:w-1/2 xl:w-1/3 "}
      >
        <div className='relative mb-12'>
          <div className='overflow-hidden rounded-[10px]'>
            <img src={ImageHref} alt='portfolio' className='w-full' />
          </div>
          <div className='relative z-10 mx-7 -mt-20 rounded-lg bg-gray-800 dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark'>
            <span className='text-primary mb-2 block text-sm font-medium'>
              {category}
            </span>
            <h3 className='text-dark dark:text-white mb-5 text-xl font-bold'>
              {title}
            </h3>
            <Link
              to={buttonHref}
              className='text-body-color dark:text-dark-6 hover:border-rose-500 hover:bg-rose-500 inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white'
            >
              {button}
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};
