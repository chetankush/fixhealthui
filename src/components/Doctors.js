import React from 'react'

const Doctors = () => {

    const experts = [
        {
            name: "Dr Ritika Saxena (PT)",
            specialization: "M.Sc (Neuro Rehabilitation)",
            city: "indore",
            rating:"3.4",
            imagePath: "expert2.jpg",
        },
        {
            name: "Dr Ritika Saxena (PT)",
            specialization: "M.Sc (Neuro Rehabilitation)",
            city: "jaipur",
            rating:"3.4",
            imagePath: "expert2.jpg",
        },
        {
            name: "Dr Ritika Saxena (PT)",
            specialization: "M.Sc (Neuro Rehabilitation)",
            city: "guna",
            rating:"3.4",
            imagePath: "expert2.jpg",
        },
        {
            name: "Dr Ritika Saxena (PT)",
            specialization: "M.Sc (Neuro Rehabilitation)",
            city: "indore",
            rating:"3.4",
            imagePath: "expert2.jpg",
        },
        {
            name: "Dr Ritika Saxena (PT)",
            specialization: "M.Sc (Neuro Rehabilitation)",
            city: "indore",
            rating:"3.4",
            imagePath: "expert2.jpg",
        },
        {
            name: "Dr Ritika Saxena (PT)",
            specialization: "M.Sc (Neuro Rehabilitation)",
            city: "jaipur",
            rating:"3.4",
            imagePath: "expert2.jpg",
        },
        {
            name: "Dr Ritika Saxena (PT)",
            specialization: "M.Sc (Neuro Rehabilitation)",
            city: "guna",
            rating:"3.4",
            imagePath: "expert2.jpg",
        },
    ];

    const cities = ["indore", "guna", "jaipur"];

    return (
        <div>
            <div className="py-14">
                <div className='text-center py-2 pb-5'>
                    <h2 className="text-center text-3xl text-white font-semibold mb-6">
                        Search Expert Doctors in your city
                    </h2>
                    <div className="w-full">
                    <button className="bg-[#00acc1] text-white rounded-md px-6 py-2 m-2">
                    indore
                    </button>
                    <button className="bg-[#00acc1] text-white rounded-md px-6 py-2 m-2">
                    guna
                    </button>
                    <button className="bg-[#00acc1] text-white rounded-md px-6 py-2 m-2">
                    jaipur
                    </button>
                    <button className="bg-[#00acc1] text-white rounded-md px-6 py-2 m-2">
                    see more
                    </button>
                    </div>
                   
                  
                </div>

                <p className="text-center text-white text-lg font-light mb-10">
                    Experience the Benefits of Advanced Technology and Expert Care
                </p>
                <div className="flex overflow-x-auto no-scrollbar w-svw space-x-6 px-14 ">
                    {experts.map((expert, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-6 min-w-[300px] md:min-w-[250px]"
                        >
                            <img
                                src={expert.imagePath}
                                alt={`Image of ${expert.name}`}
                                className="rounded-md w-full h-44 object-cover mb-4"
                            />
                            <h5 className="text-lg font-semibold mb-1">{expert.name}</h5>
                            <span className="text-sm text-[#424242]">
                                {expert.specialization}
                            </span>
                            <div className="text-sm text-[#424242]">
                                {expert.rating}
                            </div>
                            <span className="text-sm text-gray-500 block mb-4">
                                {expert.city}
                            </span>
                           
                            <button className="bg-[#00acc1] text-white rounded-md px-6 py-2">
                                Know More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Doctors
