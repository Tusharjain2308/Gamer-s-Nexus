import React, { useState } from 'react';
import gamingBackground from '../../assets/gaming-background.jpg';
import game1 from '../../assets/game1.jpg';
import game2 from '../../assets/game2.jpg';
import game3 from '../../assets/game3.jpg';
import game4 from '../../assets/game4.jpg';

const SecondaryHeroSection = () => {
  const games = [game1, game2, game3, game4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? games.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === games.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="h-screen bg-cover" style={{ backgroundImage: `url(${gamingBackground})` }}>
      <main className="flex flex-col items-center justify-center h-full bg-black/50">
        <section className="w-full max-w-4xl px-4 py-5 mt-4 text-center">
          <h2 className="text-xl md:text-2xl text-yellow-400 font-bold" style={{ fontFamily: '"Orbitron", sans-serif' }}>Your Ultimate Gaming Hub</h2>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white capitalize" style={{ fontFamily: '"Orbitron", sans-serif' }}>Find Your Next Favorite Game</h1>
          <p className="text-gray-300 py-3 text-sm md:text-lg font-semibold mb-2" style={{ fontFamily: '"Orbitron", sans-serif' }}>
            Discover top games, read the latest reviews, and stay updated with gaming news. Dive into the world of gaming like never before!
          </p>
        </section>
        <section className="relative flex flex-col flex-1 w-full max-w-6xl gap-5 h-[500px] px-10 py-5 rounded-md bg-black/50 mb-10">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${games[currentIndex]})` }}></div>
          <div className="absolute top-1/2 transform -translate-y-1/2 left-3 h-10 w-10 rounded-full bg-black/40 text-white hover:scale-95 flex items-center justify-center transition-all duration-300" aria-label="Previous" onClick={handlePrev}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 right-3 h-10 w-10 rounded-full bg-black/40 text-white hover:scale-95 flex items-center justify-center transition-all duration-300" aria-label="Next" onClick={handleNext}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </section>
      </main>
    </section>
  );
};

export default SecondaryHeroSection;
