import React from 'react';
import Testimonials from './components/Testimonials';
import Header from './components/Header';
import Doctors from './components/Doctors';
import EnquiryForm from './components/EnquiryForm';

const App = () => {
  return (
    <div className="overflow-x-hidden ">
      <Header />
    <div
        className="h-svh bg-cover bg-center relative flex md:flex-col"
        style={{
          backgroundImage: "url('herosec.jpg')", // Replace with your actual image path
        }}
      >
     <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center md:items-center justify-between sm:justify-center  sm:flex-col md:flex-col lg:flex-row 
        mt-36 sm:mt-24 md:mt-60 lg:mt-24 xl:mt-20"
      >
      <div className="hidden lg:flex lg:flex-col lg:justify-center lg:ml-20 md:ml-10 sm:ml-10">
      <p className='text-2xl sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl font-bold text-white lg:ml-5'>Find Best</p>
      <p className='text-4xl sm:text-5xl md:text-6xl lg:text-10xl xl:text-12xl font-bold text-white lg:ml-5'>PhysioTherapists</p>
      <p className='text-4xl sm:text-4xl md:text-6xl lg:text-10xl xl:text-12xl font-bold text-white lg:ml-5'>in your City</p>
  </div>
        <EnquiryForm/>
      </div>
      
      </div>

      <div className="bg-gray-950">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
         <Doctors/>
        </div>
      </div>
    </div>

      {/* Testimonials Section */}
      <div className="bg-gray-950 py-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            <Testimonials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
