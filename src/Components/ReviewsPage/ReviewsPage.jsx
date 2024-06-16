import React from 'react';
import Navbar from '../Navbar/Navbar'; 
import Reviews from '../Reviews/Reviews'; 
import SecondaryReviews from '../ReviewsSecondary/ReviewsSecondary';
import Footer from '../Footer/Footer'; 

const ReviewsPage = () => (
  <div>
    <Navbar />
    <Reviews />
    <SecondaryReviews />
    <Footer />
  </div>
);

export default ReviewsPage;
