import React from "react";
import Layout from "../components/Layout";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Achievements from "../components/Achievements/Achievements";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <Layout>
      <About />
      <Skills />
      <Achievements />
      <ContactForm />
    </Layout>
  );
};

export default Home;
