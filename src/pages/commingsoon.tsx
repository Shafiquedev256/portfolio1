import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import FooterSection from "../components/footer";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const destinationDate = new Date("Mar 15, 2025 23:59:59").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      let diff = destinationDate - now;

      if (diff <= 0) {
        let nextMonthDate = new Date();
        nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);

        if (nextMonthDate.getMonth() === 0) {
          nextMonthDate.setFullYear(nextMonthDate.getFullYear() + 1);
        }

        diff = nextMonthDate.getTime() - now;
      }

      const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0"
      );
      const hours = String(
        Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).padStart(2, "0");
      const minutes = String(
        Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, "0");
      const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(
        2,
        "0"
      );

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <section className='py-24 relative font-body'>
        <div className='w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto'>
          <div className='w-full md:px-16 px-10 md:pt-16 pt-10 pb-10 bg-gray-900 rounded-2xl flex-col justify-end items-center lg:gap-28 md:gap-16 gap-10 inline-flex'>
            <div className='flex-col justify-end items-center lg:gap-16 gap-10 flex'>
              <div className='flex-1 flex justify-between items-center'>
                <Link
                  to='/'
                  className=' font-bold font-custom text-6xl text-white tracking-wide'
                >
                  Shafiq.
                </Link>
              </div>
              <div className='flex-col justify-center items-center gap-10 flex'>
                <div className='flex-col justify-start items-center gap-2.5 flex'>
                  <h2 className='text-center text-green-400 md:text-6xl text-5xl font-bold font-manrope leading-normal'>
                    Coming Soon
                  </h2>
                  <p className='text-center text-gray-500 text-base font-normal leading-relaxed'>
                    Just {timeLeft.days} days remaining until the big reveal of
                    my new projects!
                  </p>
                </div>
                <div className='flex items-start justify-center w-full gap-2 count-down-main'>
                  <div className='timer flex flex-col gap-0.5'>
                    <div>
                      <h3 className='countdown-element days text-center text-white text-2xl font-bold font-manrope leading-9'>
                        {timeLeft.days}
                      </h3>
                    </div>
                    <p className='text-center text-gray-500 text-xs font-normal leading-normal w-full'>
                      DAYS
                    </p>
                  </div>
                  <h3 className='w-3 text-center text-gray-500 text-2xl font-medium font-manrope leading-9'>
                    :
                  </h3>
                  <div className='timer flex flex-col gap-0.5'>
                    <div>
                      <h3 className='countdown-element hours text-center text-white text-2xl font-bold font-manrope leading-9'>
                        {timeLeft.hours}
                      </h3>
                    </div>
                    <p className='text-center text-gray-500 text-xs font-normal leading-normal w-full'>
                      HRS
                    </p>
                  </div>
                  <h3 className='w-3 text-center text-gray-500 text-2xl font-medium font-manrope leading-9'>
                    :
                  </h3>
                  <div className='timer flex flex-col gap-0.5'>
                    <div>
                      <h3 className='countdown-element minutes text-center text-white text-2xl font-bold font-manrope leading-9'>
                        {timeLeft.minutes}
                      </h3>
                    </div>
                    <p className='text-center text-gray-500 text-xs font-normal leading-normal w-full'>
                      MINS
                    </p>
                  </div>
                  <h3 className='w-3 text-center text-gray-500 text-2xl font-medium font-manrope leading-9'>
                    :
                  </h3>
                  <div className='timer flex flex-col gap-0.5'>
                    <div>
                      <h3 className='countdown-element seconds text-center text-white text-2xl font-bold font-manrope leading-9'>
                        {timeLeft.seconds}
                      </h3>
                    </div>
                    <p className='text-center text-gray-500 text-xs font-normal leading-normal w-full'>
                      SECS
                    </p>
                  </div>
                </div>
                <div className='w-full flex-col justify-center items-center gap-5 flex'>
                  <h6 className='text-center text-green-400 text-base font-semibold leading-relaxed'>
                    Launching Date: March 15, 2025
                  </h6>
                  <div className='justify-center items-center gap-2.5 flex sm:flex-row flex-col'>
                    <Link
                      to={"/contact"}
                      className='sm:w-fit w-full px-3.5 py-2 bg-green-400 hover:bg-green-600 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex'
                    >
                      <span className='px-1.5 text-gray-900 text-sm font-medium leading-6 whitespace-nowrap'>
                        Notify Me
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <p className='text-center text-gray-500 text-sm font-normal leading-snug'>
              Get in touch with Me:{" "}
              <a
                href='mailto:shafiquedev256@gmail.com'
                className='hover:text-gray-100 transition-all duration-700 ease-in-out'
              >
                shafiquedev256@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
};

export default Countdown;
