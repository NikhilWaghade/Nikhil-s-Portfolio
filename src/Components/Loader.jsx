import React from 'react';

const Loader = () => {
  return (
    <div className="loader-overlay flex justify-center items-center fixed top-0 left-0 w-full h-full bg-white dark:bg-gray-900 z-50">
      <img
        src="src\assets\logo.jpg" // Add the path to your logo here
        alt="Loading..."
        className="animate-spin h-20 w-20" // You can add a spin animation or modify this to fit your style
      />
    </div>
  );
};

export default Loader;
