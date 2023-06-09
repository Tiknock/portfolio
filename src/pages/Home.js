import React from "react";
import Layout from "../components/Layout";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Achievements from "../components/Achievements/Achievements";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header/Header";
import DownIcon from "../components/DownIcon";

const Home = () => {
  return (
    <Layout>
      <DownIcon />
      <Header />
      <About />
      <Skills />
      <Achievements />
      <ContactForm />
    </Layout>
  );
};

export default Home;
