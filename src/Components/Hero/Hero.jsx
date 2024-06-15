import React from 'react';
import { AlignJustify } from 'react-feather';
import './Hero.css'; 
import gameimg from '../../assets/gta.jpg';
import gamelogo from '../../assets/gta_logo.png';

const Hero = () => {
  return (
    <div className="w-full h-auto bg-black px-5 lg:px-20 py-10">
      <nav className="w-full h-16">
        <div className="w-full flex justify-between relative h-16 items-center">
          <div className="relative uppercase text-lg font-bold text-white px-4">
            Noob / <span className="bg-lime-500 rounded-md">Pro</span>
            <span className="h-3 w-3 bg-lime-500 rounded-full absolute top-0 right-0"></span>
          </div>
          <AlignJustify size={24} className='block lg:hidden hover:opacity-80 transition text-gray-100' />
        </div>
      </nav>
      <section className="flex flex-col lg:flex-row h-auto w-full my-40">
        <div className="w-full lg:w-1/2">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white max-w-sm" style={{ fontFamily: '"Press Start 2P", cursive' }}>Game of <span className="text-lime-500">the Month</span></h1>
          <p className="text-gray-300 text-sm lg:text-base mt-5" style={{ fontFamily: '"Press Start 2P", cursive' }}>Experience the thrill and excitement of the most popular game this month. Join millions of players worldwide and immerse yourself in epic adventures, stunning graphics, and captivating storylines.</p>
          <div className="mt-10 h-12 flex items-center justify-start gap-3">
            <a href="https://www.rockstargames.com/" target="_blank" rel="noopener noreferrer" className="px-6 py-1.5 h-12 text-white bg-lime-500 rounded-lg hover:opacity-75 text-align-center transition-all duration-300" style={{ fontFamily: '"Press Start 2P", cursive', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Play Now</a>
            <a href="https://m.imdb.com/list/ls097840768/" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 text-white rounded-lg hover:opacity-75 transition-all duration-300" style={{ fontFamily: '"Press Start 2P", cursive' }}>Learn More</a>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 w-full h-auto gap-3 lg:divide-x-[1px] place-content-center">
            <div className="w-full h-20 px-5 flex flex-col items-center justify-center">
              <div className="flex items-center justify-center">
                <h2 className="text-5xl font-bold text-lime-500">4.5</h2>
                <span className="text-3xl text-white ml-2">/5</span>
              </div>
              <div className="flex mt-2">
                <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.09 2.6 1-5.8L2 7.9l5.9-.9L10 2l2.1 5 5.9.9-4.9 3.9 1 5.8L10 15z" /></svg>
                <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.09 2.6 1-5.8L2 7.9l5.9-.9L10 2l2.1 5 5.9.9-4.9 3.9 1 5.8L10 15z" /></svg>
                <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.09 2.6 1-5.8L2 7.9l5.9-.9L10 2l2.1 5 5.9.9-4.9 3.9 1 5.8L10 15z" /></svg>
                <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.09 2.6 1-5.8L2 7.9l5.9-.9L10 2l2.1 5 5.9.9-4.9 3.9 1 5.8L10 15z" /></svg>
                <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.09 2.6 1-5.8L2 7.9l5.9-.9L10 2l2.1 5 5.9.9-4.9 3.9 1 5.8L10 15z" /></svg>
              </div>
              <h3 className="text-gray-300 text-sm mt-2" style={{ fontFamily: '"Press Start 2P", cursive' }}>Game Rating</h3>
            </div>
            <div className="w-full h-20 px-5 flex flex-col items-center justify-center">
              <h2 className="text-5xl font-bold text-lime-500">1.5<span className="text-white">M</span></h2>
              <h3 className="text-gray-300 text-sm mt-2" style={{ fontFamily: '"Press Start 2P", cursive' }}>Downloads</h3>
            </div>
            <div className="w-full h-20 px-5 flex flex-col items-center justify-center">
              <h2 className="text-5xl font-bold text-lime-500">Action</h2>
              <h3 className="text-gray-300 text-sm mt-2" style={{ fontFamily: '"Press Start 2P", cursive' }}>Game Type</h3>
            </div>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 lg:px-10 flex justify-center">
          <div className="absolute left-10 top-20 h-[30%] w-[30%] bg-emerald-300 blur-[130px]"></div>
          <img src={gamelogo} alt="" className="h-auto w-[25%] absolute top-[30%] left-10 z-5" />
          <img src={gameimg} alt="" className="h-auto w-full md:w-[70%] rounded-3xl" />
        </div>
      </section>
      <div className="flex justify-center items-center mt-10">
        <p className="text-gray-300 text-base" style={{ fontFamily: '"Press Start 2P", cursive' }}>Get ready for the ultimate gaming experience!</p>
      </div>
    </div>
  );
};

export default Hero;
