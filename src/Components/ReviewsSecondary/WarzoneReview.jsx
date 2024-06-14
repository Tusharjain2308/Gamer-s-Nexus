import React from 'react';
import valorantBackground from '../../assets/warzone1.jpg'; // Replace with your actual image path

const RatingBar = ({ rating, count }) => {
  const widthPercentage = (count / 56) * 100;

  // Determine text color based on rating value
  let ratingColorClass = 'text-white';
  if (rating >= 4) {
    ratingColorClass = 'text-green-600'; // Adjust color based on your preference
  } else if (rating >= 2) {
    ratingColorClass = 'text-yellow-600'; // Adjust color based on your preference
  } else {
    ratingColorClass = 'text-red-600'; // Adjust color based on your preference
  }

  return (
    <li className="flex items-center text-sm font-medium">
      <span className={`w-6 ${ratingColorClass}`}>{rating}</span>
      <div className="flex items-center ml-3">
        <div className="relative w-24 h-6 bg-gray-200 rounded-full">
          <div className="absolute h-full bg-yellow-400 rounded-full transition-width" style={{ width: `${widthPercentage}%` }}></div>
        </div>
        <span className="ml-3 text-white-600">{count}</span>
      </div>
    </li>
  );
};

const RatingStats = ({ averageRating }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg p-6 shadow-md">
      <div className="flex items-center justify-center w-16 h-16 bg-blue-900 rounded-full mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="text-3xl font-bold text-blue-900 mb-2">{averageRating}</div>
      <p className="text-sm text-gray-600">Average User Rating</p>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="relative w-full bg-gray-900 py-24 overflow-hidden min-h-screen"> {/* Increased py-24 and added min-h-screen */}
      <img src={valorantBackground} alt="Valorant" className="absolute inset-0 object-cover w-full h-full opacity-50 z-0" />
      <div className="max-w-4xl mx-auto px-6 py-16 relative z-5"> {/* Increased py-16 for inner padding */}
        <div className="bg-blue-900 bg-opacity-90 text-white rounded-lg p-10 shadow-lg text-center"> {/* Increased p-10 for inner padding */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Call of Duty : Warzone</h1> {/* Changed font to serif */}
          <p className="text-lg md:text-xl mb-6">An intense tactical shooter with vibrant characters and precise gunplay.</p>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <RatingStats averageRating={4.3} />
            </div>
            <ul className="w-full md:w-1/2 space-y-4 md:pl-10">
              <RatingBar rating={5} count={20} />
              <RatingBar rating={4} count={22} />
              <RatingBar rating={3} count={20} />
              <RatingBar rating={2} count={11} />
              <RatingBar rating={1} count={3} />
            </ul>
          </div>
          <button className="block mx-auto mt-8 bg-blue-800 hover:bg-blue-700 text-white rounded-lg px-6 py-3 text-xl font-medium transition duration-300">Write a Review</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
