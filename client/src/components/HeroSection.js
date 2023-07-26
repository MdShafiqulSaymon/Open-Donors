import React from 'react';
import heroimg from '../assets/hero-section.png'
const HeroSection = () => {
  return (
    <div className="hero-component flex flex-col md:flex-row items-center justify-around   text-red-800 font-extrabold  h-screen">
      {/* Your hero component content goes here */}
      <h1 className="text-5xl">Open Donors</h1>
      <img src={heroimg} alt="" />

    </div>
  );
};

export default HeroSection;
