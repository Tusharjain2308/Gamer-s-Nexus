import React from 'react';
import './NewHero.css';
import imageone from '../../assets/images.png';

const Hero = () => {
  return (
    <section className="hero-section bg-white dark:bg-gray-900">
      <div className="hero-container grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="hero-text mr-auto place-self-center lg:col-span-7">
          <div className="welcome-text">
            <span>Welcome to</span>
          </div>
          <h1 className="hero-title max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            <span className="pink">GAMER's</span> <span className="white">NEXUS</span>
          </h1>
          <p className="hero-description max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Stay ahead with cutting-edge game insights, reviews, and news. Join the nexus of gaming enthusiasts today!
          </p>
          <div className="hero-buttons">
            <a 
              href="#" 
              className="hero-button-explore inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg hover:from-pink-600 hover:to-purple-600 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800 transition-all duration-300 transform hover:scale-105"
            >
              Explore More
            </a>
          </div>
        </div>
        <div className="hero-image hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img 
            src={imageone} 
            alt="mockup"
          />
        </div>                
      </div>
    </section>
  );
};

export default Hero;
