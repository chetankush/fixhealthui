import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alice",
      review: "Excellent service! Highly recommend.",
      date: "January 12, 2023",
      image: "t1.jpg",
    },
    {
      name: "Bob",
      review: "The staff was very kind and professional.",
      date: "February 9, 2023",
      image: "t2.jpg",
    },
    {
      name: "Charlie",
      review: "I had a great experience from start to finish.",
      date: "March 15, 2023",
      image: "t3.jpg",
    },
  ];
  return (
    <div>
    <h3 className="text-center text-2xl font-semibold -mt-5 text-white">
      What Our Customers Say
    </h3>
    <div className="flex space-x-4 overflow-x-auto py-8 mt-12 px-4 relative bg-gray-950">
      {testimonials.map((testimonial, i) => (
        <div
          key={i}
          className="min-w-[260px] bg-gray-800 w-46 rounded-xl p-6 mr-2 shadow-lg flex flex-col items-center text-white"
        >
          <img
            className="w-20 h-20 rounded-full mb-3 break-words object-fill"
            src={`/${testimonial.image}`}
            alt={`${testimonial.name}'s testimonial`}
          />
          <p className="text-sm text-gray-300 italic mb-2">
            {testimonial.review}
          </p>
          <span className="font-semibold text-white">
            {testimonial.name}
          </span>
          <span className="text-xs text-gray-500">{testimonial.date}</span>
        </div>
      ))}
      </div>
      <div className="flex justify-center ">  
          <button className='py-2 px-4 rounded bg-teal-500 text-white'> see more </button>
       </div>
  </div>
  
  )
}

export default Testimonials
