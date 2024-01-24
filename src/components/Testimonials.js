import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Raman",
      review: "Excellent service! Highly recommend.",
      date: "January 12, 2023",
      image: "t1.jpg",
    },
    {
      name: "Madhur",
      review: "The staff was very kind and professional.",
      date: "February 9, 2023",
      image: "t2.jpg",
    },
    {
      name: "Kriti",
      review: "I had a great experience from start to finish.",
      date: "March 15, 2023",
      image: "t3.jpg",
    },
  ];

  return (
    <div className="text-center">
      <h3 className="text-2xl font-semibold -mt-5 text-white">What Our Customers Say</h3>
      <div className="flex overflow-x-auto hide-scrollbar justify-center space-x-4 py-8 mt-12 px-4 relative bg-gray-950">
      {testimonials.map((testimonial, i) => (
        <div
          key={i}
          className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl bg-gray-800 w-46 rounded-xl p-6 mb-2 shadow-lg flex flex-col items-center text-white"
        >
            <img
              className="w-20 h-20 rounded-full mb-3 break-words object-cover"
              src={`/${testimonial.image}`}
              alt={`${testimonial.name}'s testimonial`}
            />
            <p className="text-sm text-gray-300 italic mb-2">{testimonial.review}</p>
            <span className="font-semibold text-white">{testimonial.name}</span>
            <span className="text-xs text-gray-500">{testimonial.date}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button className="py-2 px-4 rounded bg-teal-500 text-white">See More</button>
      </div>
    </div>
  );
};

export default Testimonials;
