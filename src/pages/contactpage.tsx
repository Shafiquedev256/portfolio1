import { Helmet } from "react-helmet";
import Contact from "../components/contact";
import FooterSection from "../components/footer";
import Header from "../components/header";

const Contactus_page = () => {
  return (
    <>
      <Helmet>
        <title>Contact – Hire Me | Freelance Web Developer</title>
        <meta
          name='description'
          content='Get in touch with Musinguzi Shafiq – a freelance web developer available for global projects using React, Tailwind CSS, and Node.js.'
        />
        <link rel='canonical' href='https://www.shafiquedev256.tech/contact' />
      </Helmet>
      <Header />
      <main>
        <Contact />
      </main>

      <FooterSection />
    </>
  );
};

export default Contactus_page;
