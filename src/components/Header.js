import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <header
      className={`flex fixed top-0 left-0 right-0 justify-between items-center py-4 px-8 z-10 transition-all duration-300 ${
        scrolled ? 'bg-gray-900 text-white shadow-lg' : 'bg-transparent text-white'
      }`}
    >
      <div className='max-w-32 pt-2 min-w-1'><img src="logofixhealth.svg" alt="" /></div>
      <nav className="text-sm">
        <span className="mr-6">Home</span>
        <span className="mr-6">Services</span>
        <span className="mr-6">Blogs</span>
        <span className="mr-6">About</span>
        <button className="py-2 px-4 rounded bg-teal-500 text-gray-900">
          Book Now
        </button>
      </nav>
    </header>
  );
};

export default Header;
