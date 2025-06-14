import About1 from "../components/about";
import FooterSection from "../components/footer";
import Header from "../components/header";
import { Helmet } from "react-helmet";

const About_page = () => {
  return (
    <>
      <Helmet>
        <title>
          About Shafiq dev – Freelance Web Developer | React, Tailwind, Node.js
        </title>
        <meta
          name='description'
          content='I’m a freelance web developer specializing in React, Tailwind CSS, TypeScript, Node.js, and MongoDB. I build modern, SEO-optimized websites for clients worldwide.'
        />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href='https://www.shafiquedev256.tech/about' />
        <meta
          property='og:title'
          content='About Me – Freelance Web Developer'
        />
        <meta
          property='og:description'
          content='Freelance full-stack developer building fast, modern websites for global clients using React, Node.js, and more.'
        />
        <meta
          property='og:url'
          content='https://www.shafiquedev256.tech/about'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://www.shafiquedev256.tech/webtoon2.avif'
        />
        <meta name='twitter:card' content='summary_large_image' />
      </Helmet>
      <Header />
      <main>
        <About1 />
      </main>

      <FooterSection />
    </>
  );
};

export default About_page;
