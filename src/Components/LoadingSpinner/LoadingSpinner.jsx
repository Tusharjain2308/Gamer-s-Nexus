// src/Components/LoadingSpinner/LoadingSpinner.js
import React from 'react';
import { useLoading } from '../../contexts/LoadingContext';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  const { loading } = useLoading();

  if (!loading) return null;

  return (
    <div className="loading-spinner-overlay">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
