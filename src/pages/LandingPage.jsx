import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import NameCard from "../components/NameCard";
import "../styles/landing.css";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <NameCard/>
      <Footer />
    </div>
  );
};

export default LandingPage;
