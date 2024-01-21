import React from 'react';
import Testimonials from './components/Testimonials';
import Header from './components/Header';
import Doctors from './components/Doctors';

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div
        className="h-svh bg-cover bg-center relative flex md:flex-col"
        style={{
          backgroundImage: "url('herosec.jpg')", // Replace with your actual image path
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-between ">
        <div className="w-full ml-20">
        <p className='text-4xl font-bold text-white ml-5'>Find Best</p>
        <p className='text-6xl font-bold text-white ml-5'>PhysioTherapists</p>
        <p className='text-6xl font-bold text-white ml-5'>in your City</p>

        </div>
          <section className="flex justify-end items-center px-8 py-12 mt-32">

         
            <div className="max-w-[350px] bg-gray-800 p-6 rounded ">
              <h2 className="text-lg text-white mb-2">Book an Appointment for</h2>
              <span className="text-2xl font-bold text-teal-500 mb-6 line-through">Rs 1000</span>
              <span className="text-2xl font-bold text-white mb-6">FREE</span>
              <p className="text-sm text-gray-400 mb-4">60+ Expert Physiotherapists for 200+ Conditions</p>
              <form>
                <div className="flex flex-col space-y-2">
                  <input className="bg-gray-700 text-white placeholder-gray-500 p-2 rounded" placeholder="Your Name" type="text" />
                  <div className="flex items-center">
                    <div className="bg-gray-700 text-white p-2 rounded">
                      <div id="country-code">+91</div>
                    </div>
                    <input className="bg-gray-700 text-white placeholder-gray-500 flex-grow p-2 ml-2 rounded" placeholder="Phone Number" type="tel" />
                  </div>
                  <button className="bg-teal-500 py-2 px-4 cursor-pointer rounded">Start Your Recovery</button>
                </div>
              </form>
              <div className="flex justify-center items-center mt-4 w-full rounded-md	">
              <img src="physiotherapy_form_trust_image_2.webp" className="rounded-sm" alt="ratings img" />
              </div>
            </div>
          </section>
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
