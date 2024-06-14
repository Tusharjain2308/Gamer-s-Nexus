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
import SecondaryReviews from "./Components/ReviewsSecondary/ReviewsSecondary"; // Import SecondaryReviews component
import GtaReview from "./Components/ReviewsSecondary/WarzoneReview";

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
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
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
