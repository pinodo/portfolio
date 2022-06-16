import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
