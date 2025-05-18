import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// import Footer from './Components/Footer';
import Footer from './Components/Footer';
// import Navbar from './Components/Navbar';
import Navbar from './Components/Navbar';
// import Loader from './Components/Loader';
import Loader from './Components/Loader';

// import Home from './Pages/Home';
import Home from './Pages/Home';

// Removed individual imports for About, Hero, Projects, Experience, Contact
// because now they are included inside Home.jsx

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home menuOpen={menuOpen} />} />
              {/* Removed other routes for /hero, /about, /projects, etc. */}
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
