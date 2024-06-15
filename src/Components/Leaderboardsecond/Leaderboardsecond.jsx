import { useState } from 'react';
import imgimg from "../../assets/leader.jpg"; // Replace with your image path

export default function Leaderboard() {
  const [animationToggle, setAnimationToggle] = useState(true); // State to control animation

  // Define game links
  const games = [
    {
      name: 'The Witcher 3: Wild Hunt',
      link: 'https://www.thewitcher.com/',
      color: 'Various',
      category: 'Action RPG',
      price: '$29.99',
    },
    {
      name: 'Call of Duty: Modern Warfare',
      link: 'https://www.callofduty.com/',
      color: 'Various',
      category: 'First-Person Shooter',
      price: '$59.99',
    },
    {
      name: 'FIFA 22',
      link: 'https://www.ea.com/games/fifa/fifa-22',
      color: 'Various',
      category: 'Sports',
      price: '$59.99',
    },
    {
      name: 'Minecraft',
      link: 'https://www.minecraft.net/',
      color: 'Various',
      category: 'Sandbox',
      price: '$26.95',
    },
    {
      name: 'Fortnite',
      link: 'https://www.epicgames.com/fortnite/en-US/home',
      color: 'Various',
      category: 'Battle Royale',
      price: 'Free',
    },
  ];

  return (
    <div className="bg-gray-900">
      {/* Animated background elements */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Background overlay */}
        <div
          className="absolute inset-0 -z-10 transform-gpu overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, #4F3BA9, #CB3283)`,
          }}
          aria-hidden="true"
        >
          <div
            className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"
            aria-hidden="true"
          />
        </div>
        
        {/* Animated elements */}
        <div
          className={`absolute inset-x-0 ${animationToggle ? '-top-40' : '-top-[calc(100%-13rem)]'} -z-10 transform-gpu overflow-hidden blur-3xl sm:${animationToggle ? '-top-80' : 'top-[calc(100%-30rem)]'} animate-pulse`}
          aria-hidden="true"
          style={{
            animationDuration: '2s', // Longer duration for a stronger effect
            animationTimingFunction: 'ease-in-out', // Smooth acceleration and deceleration
            transition: 'opacity 0.3s ease-in-out', // Transition opacity for smoother toggle
            opacity: animationToggle ? 1 : 0, // Initial opacity based on animationToggle state
          }}
        >
          <div
            className={`relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-800 to-blue-800 opacity-70 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]`}
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        
        {/* Main content */}
        <div className="mx-auto max-w-2xl sm:py-24 lg:py-48 text-white text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Popular Games and Products
          </h1>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Link
                  </th>
                  <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {games.map((game, index) => (
                  <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                      <a href={game.link} target="_blank" rel="noopener noreferrer">
                        {game.name}
                      </a>
                    </th>
                    <td className="px-6 py-4">
                      <a href={game.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        Visit {game.name}
                      </a>
                    </td>
                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      {game.category}
                    </td>
                    <td className="px-6 py-4">
                      {game.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Additional animated background element */}
        <div
          className={`absolute inset-x-0 ${animationToggle ? 'top-[calc(100%-13rem)]' : '-top-[calc(100%-30rem)]'} -z-10 transform-gpu overflow-hidden blur-3xl sm:${animationToggle ? 'top-[calc(100%-30rem)]' : '-top-80'} animate-pulse`}
          aria-hidden="true"
          style={{
            animationDuration: '2s', // Longer duration for a stronger effect
            animationTimingFunction: 'ease-in-out', // Smooth acceleration and deceleration
            transition: 'opacity 0.3s ease-in-out', // Transition opacity for smoother toggle
            opacity: animationToggle ? 1 : 0, // Initial opacity based on animationToggle state
          }}
        >
          <div
            className={`relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-purple-800 to-blue-800 opacity-70 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]`}
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
