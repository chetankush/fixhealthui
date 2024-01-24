import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

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

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  const closeMobileNav = () => {
    setShowMobileNav(false);
  };

  return (
    <header
      className={`flex fixed top-0 left-0 right-0 justify-between items-center py-4 px-8 z-10 transition-all duration-300 ${
        scrolled ? 'bg-gray-900 text-white shadow-lg' : 'bg-transparent text-white'
      }`}
    >
      <div className='max-w-32 pt-2 min-w-1'>
        <img src="logofixhealth.svg" alt="" />
      </div>
      <nav className="text-sm hidden md:flex">
        <span className="mr-6">Home</span>
        <span className="mr-6">Services</span>
        <span className="mr-6">Blogs</span>
        <span className="mr-6">About</span>
        <button className="py-2 px-4 rounded bg-teal-500 text-gray-900">
          Book Now
        </button>
      </nav>
      {/* Hamburger menu for mobile */}
      <div className="md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={toggleMobileNav}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {/* Mobile Navigation */}
      {showMobileNav && (
        <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-gray-900 text-white flex flex-col items-center py-4">
          <span className="my-2">Home</span>
          <span className="my-2">Services</span>
          <span className="my-2">Blogs</span>
          <span className="my-2">About</span>
          <button className="py-2 px-4 rounded bg-teal-500 text-gray-900 my-4">
            Book Now
          </button>
          <button
            className="text-white focus:outline-none"
            onClick={closeMobileNav}
          >
            Close
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
