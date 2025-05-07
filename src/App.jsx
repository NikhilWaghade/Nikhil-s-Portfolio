import React, { useState, useEffect } from 'react';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Experience from './Pages/Experience';
import Hero from './Pages/Hero';
import Projects from './Pages/Projects';
import Loader from './Components/Loader'; // Import the loader

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for the loader
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {loading && <Loader />} {/* Show loader if loading state is true */}
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
