import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  Outlet,
} from "react-router-dom";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import NewHero from "./Components/NewHero/NewHero";
import SecondaryHero from "./Components/Secondary Hero/SecondaryHero";
import Footer from "./Components/Footer/Footer";
import Reviews from "./Components/Reviews/Reviews";
import SecondaryReviews from "./Components/ReviewsSecondary/ReviewsSecondary"; 
import GtaReview from "./Components/ReviewsSecondary/WarzoneReview";
import Contact from "./Components/Contact/Contact";
import Leaderboard from "./Components/LeaderBoard/Leaderboard";
import Leaderboardsecond from "./Components/Leaderboardsecond/Leaderboardsecond";

const Layout = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "Reviews",
        element: (
          <>
            <Reviews />
            <SecondaryReviews />
            <GtaReview />
          </>
        ),
      },
      {
        path: "Contact Us",
        element: <Contact />,
      },
      {
        path: "Leaderboard",
        element: (
          <>
            <Leaderboard />
            <Leaderboardsecond />
          </>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
