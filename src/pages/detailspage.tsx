import FooterSection from "../components/footer";
import Header from "../components/header";
import img1 from "../assets/sitigym.png";
import img2 from "../assets/openflow .png";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

type Projects = {
  business: string;
  images: string;
  intro: string;
  approach: string;
  solution: string[];
  impact: string;
  link: string;
}[];

const Detail_page = () => {
  const { project } = useParams();
  if (!project) return;
  const [projectid, setProjectId] = useState<Projects>([]);
  useEffect(() => {
    switch (project) {
      case "project-1":
        setProjectId([projects[0]]);
        break;
      case "project-2":
        setProjectId([projects[1]]);
        break;
      case "project-3":
        setProjectId([projects[3]]);
    }
  }, []);
  return (
    <>
      <Header />
      <div className='min-h-screen flex flex-col justify-center items-center font-body'>
        <div className='md:w-[60%] w-[94%] text-gray-200'>
          {projectid.map((items) => (
            <>
              <img src={items.images} alt='' className='rounded-lg m-2' />
              <div>
                <h1 className='text-white text-2xl mb-2 font-bold text-center'>
                  {items.business}
                </h1>
                <p className='text-gray-200 mb-5 '>{items.intro}</p>
                <p className='text-gray-200 mb-5 '>{items.approach}</p>
                <div>
                  <h3 className='font-bold text-2xl py-2'>My Solution</h3>
                  <h3>
                    With this understanding, I crafted a solution tailored to
                    their needs:
                  </h3>
                  <ul className='list-disc pl-5 mb-5'>
                    {items.solution.map((item) => (
                      <li className='my-1'>{item}</li>
                    ))}
                  </ul>
                  <div>
                    <h3 className='font-bold text-2xl py-2'>The Impact</h3>
                    <p className='text-gray-200 mb-5 '>{items.impact}</p>
                  </div>
                  <div className='my-4'>
                    <p className='text-gray-200 italic mb-5 '>
                      Thank you for reading !{" "}
                    </p>
                    <Link
                      to={items.link}
                      target='_blank'
                      className='px-6 py-2 mb-8 font-semibold text-center bg-rose-600 text-white rounded-sm'
                    >
                      Live Site
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ))}
          <div></div>
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default Detail_page;

const projects = [
  {
    business: "Siti GYM Kampala",
    images: img1,
    intro:
      "When I was approached to redesign Siti Gym’s website, the challenge was clear: their online presence didn’t reflect the energy, community, and passion that the gym embodies. The existing website felt generic, more like a template than a true representation of what Siti Gym offers. I knew this was an opportunity to create something meaningful something that connected with their audience and brought the gym’s vibrant spirit to life.",
    approach:
      "The first step was diving deep into their goals and challenges. I learned that the gym wanted to showcase its classes, transparent pricing, and values while also creating a space that felt inviting and alive. They needed a website that wasn’t just functional but inspiring a site that captured the heart of their mission.",
    solution: [
      "A Fresh, Engaging Design: Using Nextjs, Tailwind CSS, and TypeScript, I built a modern and responsive website that feels as dynamic as a gym session.",
      "Highlighting What Matters: I reorganized the content to prominently feature their workout schedules, pricing, and testimonials. Each section was designed to feel authentic and relatable, giving visitors a clear sense of what to expect.",
      "Interactive Features: I added a detailed schedule system with pop-up modals for workouts, ensuring visitors could easily explore their options.",
      "SEO-Driven Content: I implemented strategic keywords and optimized the website’s structure to improve its visibility and reach in search engines.",
    ],
    impact:
      "The redesigned website transformed how Siti Gym connects with its audience. It’s no longer just a website—it’s a digital extension of the gym, full of energy, transparency, and purpose. The feedback from both the client and their members has been overwhelmingly positive, and the site now serves as a source of pride and inspiration for the community.",
    link: "https://sitigym256.vercel.app/",
  },
  {
    business: "Open Flow Logistics",
    images: img2,
    intro:
      "Open Flow Logistics needed a stronger online presence to connect with clients and showcase their services effectively. Their existing digital footprint was limited, making it difficult for potential customers to find information or request services. To solve this, I designed and developed a modern, user-friendly website that improves visibility, streamlines customer inquiries, and enhances their overall brand image. ",
    approach:
      "I approached the problem by leveraging Next.js for performance, Tailwind CSS for responsive design, and SEO best practices to improve visibility, ensuring a fast, modern, and user-friendly website.",
    solution: [
      "Built with Next.js for fast performance and seamless navigation",
      "Implemented Tailwind CSS for a modern, responsive design",
      "Optimized SEO with structured metadata and keyword-rich content",
      "Enhanced page speed with server-side rendering (SSR) and static generation",
      "Improved user experience with a clean, intuitive interface",
      "Streamlined customer inquiries with clear call-to-action elements",
    ],
    impact:
      "The new website significantly improved Open Flow Logistics' online presence by increasing traffic through better SEO, enhancing user experience with faster load times, and ensuring full mobile responsiveness. Clear navigation and strong call-to-action elements boosted customer engagement, while a modern design strengthened the company's brand credibility. Additionally, streamlined inquiries led to improved lead generation and higher conversion rates.",
    link: "https://openflow.vercel.app/",
  },
];
