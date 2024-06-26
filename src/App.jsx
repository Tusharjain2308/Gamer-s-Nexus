// src/App.js
import React, { useEffect } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  Outlet,
  useNavigation,
} from 'react-router-dom';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import NewHero from './Components/NewHero/NewHero';
import SecondaryHero from './Components/Secondary Hero/SecondaryHero';
import Footer from './Components/Footer/Footer';
import Reviews from './Components/Reviews/Reviews';
import SecondaryReviews from './Components/ReviewsSecondary/ReviewsSecondary';
import WarzoneReview from './Components/ReviewsSecondary/WarzoneReview';
import GtaReview from './Components/ReviewsSecondary/GtaReview';
import Contact from './Components/Contact/Contact';
import Leaderboard from './Components/LeaderBoard/Leaderboard';
import Leaderboardsecond from './Components/Leaderboardsecond/Leaderboardsecond';
import { LoadingProvider, useLoading } from './contexts/LoadingContext';
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

const Layout = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">
      <ScrollToTop />
      <Outlet />
    </main>
    <Footer />
  </div>
);

const Home = () => (
  <div>
    <NewHero />
    <SecondaryHero />
    <Hero />
  </div>
);

const RouteWithLoading = ({ element }) => {
  const navigation = useNavigation();
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading(navigation.state === 'loading');
  }, [navigation.state, setLoading]);

  return element;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <RouteWithLoading element={<Home />} />,
      },
      {
        path: 'Reviews',
        element: (
          <RouteWithLoading
            element={
              <>
                <Reviews />
                <SecondaryReviews />
                <WarzoneReview />
                <GtaReview />
              </>
            }
          />
        ),
      },
      {
        path: 'Contact Us',
        element: <RouteWithLoading element={<Contact />} />,
      },
      {
        path: 'Leaderboard',
        element: (
          <RouteWithLoading
            element={
              <>
                <Leaderboard />
                <Leaderboardsecond />
              </>
            }
          />
        ),
      },
    ],
  },
]);

const App = () => {
  return (
    <LoadingProvider>
      <RouterProvider router={router} />
      <LoadingSpinner />
    </LoadingProvider>
  );
};

export default App;
