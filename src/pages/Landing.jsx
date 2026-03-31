import React from "react";
import Hero from "../components/Hero";
import CuratedEscapes from "../components/CuratedEscapes";
import EliteExperiences from "../components/EliteExperiences";
import Testimonial from "../components/Testimonial";

const Landing = () => {
  return (
    <main>
      <Hero />
      <CuratedEscapes />
      <EliteExperiences />
      <Testimonial />
    </main>
  );
};

export default Landing;
