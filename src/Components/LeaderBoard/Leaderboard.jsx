import { useState, useRef } from 'react';
import imgimg from "../../assets/leader.jpg";
import Leaderboardsecond from '../Leaderboardsecond/Leaderboardsecond'; // Import your Leaderboard component

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const leaderboardRef = useRef(null); // Ref for the leaderboard section

  // Function to scroll to the leaderboard section
  const scrollToLeaderboard = () => {
    if (leaderboardRef.current) {
      leaderboardRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-900">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-0 -z-10 transform-gpu overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url(${imgimg})`,
          }}
          aria-hidden="true"
        >
          <div
            className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"
            aria-hidden="true"
          />
        </div>
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 animate-pulse"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-800 to-blue-800 opacity-70 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-gray-100">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 ring-1 ring-gray-300 hover:ring-gray-400 bg-white bg-opacity-20 backdrop-blur-md">
              Check out the top performers.{' '}
              <button
                onClick={scrollToLeaderboard}
                className="cursor-pointer font-semibold text-indigo-200 hover:text-indigo-400"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                View Leaderboard <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
          <div
            ref={leaderboardRef}
            id="leaderboard"
            className="text-center bg-white bg-opacity-40 backdrop-blur-md p-12 rounded-lg shadow-lg text-black"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-gray-100 text-black">
              Welcome to the Leaderboard
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 text-black">
              Discover the top performers in our community. See how you rank and strive to reach the top!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#leaderboard"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-gray-100 shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                View Leaderboard
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-300 hover:text-gray-100 text-black">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <Leaderboardsecond /> {/* Render the Leaderboard component */}
      </div>
    </div>
  );
}