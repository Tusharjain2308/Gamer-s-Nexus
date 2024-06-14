import React from 'react';
import Navbar from '../Navbar/Navbar'; // Adjust path as per your project structure
import Reviews from '../Reviews/Reviews'; // Adjust path as per your project structure
import SecondaryReviews from '../ReviewsSecondary/ReviewsSecondary'; // Adjust path as per your project structure
import Footer from '../Footer/Footer'; // Adjust path as per your project structure

const ReviewsPage = () => (
  <div>
    <Navbar />
    <Reviews />
    <SecondaryReviews />
    <Footer />
  </div>
);

export default ReviewsPage;
