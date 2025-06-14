import { Helmet } from "react-helmet";
import FooterSection from "../components/footer";
import Header from "../components/header";
import Portfolio from "../components/portfolio";

const Portfolio_page = () => {
  return (
    <>
      <Helmet>
        <title>My Work – Freelance Web Developer Portfolio</title>
        <meta
          name='description'
          content='Explore web development projects by freelance developer Musinguzi Shafiq. Built using React, Next.js, Tailwind CSS, Node.js, and MongoDB.'
        />
        <link
          rel='canonical'
          href='https://www.shafiquedev256.tech/portfolio'
        />
      </Helmet>
      <Header />
      <main>
        <Portfolio />
      </main>
      <FooterSection />
    </>
  );
};

export default Portfolio_page;
