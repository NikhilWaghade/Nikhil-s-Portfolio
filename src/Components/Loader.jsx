import React from 'react';
import logo from '../assets/logo.jpg';

const Loader = () => {
  return (
    <div className="loader-overlay flex justify-center items-center fixed top-0 left-0 w-full h-full bg-white dark:bg-gray-900 z-50">
      <img
        src={logo} 
        alt="Loading..."
        className="animate-spin h-20 w-20" 
      />
    </div>
  );
};

export default Loader;
