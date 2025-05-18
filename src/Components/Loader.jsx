import React from 'react';
import logo from '../assets/logo_new.png';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white dark:bg-gray-900 z-50">
      <div className="p-6 rounded-full animate-bgColorTransition">
        <img
          src={logo}
          alt="Loading..."
          className="h-20 w-96 object-contain animate-scaleUp"
        />
        
      </div>
    </div>
  );
};

export default Loader;
