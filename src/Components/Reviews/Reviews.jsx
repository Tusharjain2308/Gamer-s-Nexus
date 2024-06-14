import { useEffect, useState } from 'react';
import backmain from '../../assets/backreviewmain.png';

export default () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest('.menu-btn')) setState(false);
    };
  }, []);

  return (
    <div className="relative bg-gray-900 text-white">
      <div
        className="absolute inset-0 blur-xl h-[580px]"
        style={{
          backgroundImage: `url(${backmain})`,
          backgroundSize: 'cover',
          top: '120px',
          filter: 'blur(10px)',
        }}
      ></div>
      <div className="relative">
        <section>
          <div className="max-w-screen-xl mx-auto px-4 py-48 gap-12 overflow-hidden md:px-8 md:flex">
            <div className="flex-none space-y-5 max-w-xl">
              <a
                href="javascript:void(0)"
                className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border border-gray-500 text-sm font-medium duration-150 hover:bg-gray-700"
              >
                <span className="inline-block rounded-full px-3 py-1 bg-red-500 text-white">
                  News
                </span>
                <p className="flex items-center text-gray-300 bg-gray-800 px-3 py-1 rounded-full">
                  Read the latest game reviews here
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </p>
              </a>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h1 className="text-3xl font-extrabold sm:text-4xl text-gray-100">
                  Dive into the world of gaming
                </h1>
                <p className="text-gray-100 mt-4">
                  Explore in-depth reviews, gameplay videos, and the latest updates
                  from the gaming world. Stay ahead with our comprehensive guides
                  and tips.
                </p>
                <div className="flex items-center gap-x-3 sm:text-sm mt-4">
                  <a
                    href="javascript:void(0)"
                    className="flex items-center justify-center gap-x-1 py-3 px-5 bg-red-500 duration-150 hover:bg-red-600 active:bg-red-700 rounded-full text-white"
                  >
                    Give reviews
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-1 hidden md:block">
              <img
                src="https://raw.githubusercontent.com/sidiDev/remote-assets/c86a7ae02ac188442548f510b5393c04140515d7/undraw_progressive_app_m-9-ms_oftfv5.svg"
                className="max-w-xl"
                alt="Gaming Illustration"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
