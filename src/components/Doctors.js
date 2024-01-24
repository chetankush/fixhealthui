import React, { useState, useEffect } from 'react';

const Doctors = () => {
    const [selectedCity, setSelectedCity] = useState(null);
    const [experts, setExperts] = useState([]);
    const [cities, setCities] = useState([]);

    useEffect(() => {
        // Fetch data when the component mounts
        fetch(`https://rich-blue-pigeon-tam.cyclic.app/users`)
            .then(response => response.json())
            .then(data => {
                setExperts(data);
                // Extract unique cities from the data
                const uniqueCities = [...new Set(data.map(expert => expert.city.toLowerCase()))];
                setCities(uniqueCities);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleCityButtonClick = (city) => {
        setSelectedCity(city);
    };

    const filteredExperts = selectedCity
        ? experts.filter((expert) => expert.city.toLowerCase() === selectedCity.toLowerCase())
        : experts;

    const sortedExperts = filteredExperts.slice().sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));

    return (
        <div>
            <div className="py-12 mt-24 md:mt-20">
                <div className='text-center py-2 pb-5'>
                    <h2 className="text-center text-3xl text-white font-semibold mb-10">
                        Search Expert Doctors in your city
                    </h2>
                    <div className="w-full flex flex-wrap justify-center">
                        {cities.map((city) => (
                            <button
                                key={city}
                                onClick={() => handleCityButtonClick(city)}
                                className={`bg-[#00acc1] text-white rounded-md px-6 py-2 m-2 ${selectedCity === city ? 'bg-opacity-70' : ''}`}
                            >
                                {city}
                            </button>
                        ))}
                        <button
                            onClick={() => handleCityButtonClick(null)}
                            className={`bg-[#00acc1] text-white rounded-md px-6 py-2 m-2 ${selectedCity === null ? 'bg-opacity-70' : ''}`}
                        >
                            show all
                        </button>
                    </div>
                </div>

                <div className="flex overflow-x-auto no-scrollbar w-svw space-x-6 px-10 mt-4">
                    {sortedExperts.map((expert, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-6 min-w-[300px] md:min-w-[250px]"
                        >
                            <img
                                src={expert.imagePath} // Make sure the image paths are correct
                                alt={`Image of ${expert.name}`}
                                className="rounded-md w-full h-44 object-cover mb-4"
                            />
                            <h5 className="text-lg font-semibold mb-1">{expert.full_name}</h5>
                            <span className="text-sm text-[#424242]">
                                {expert.profession}
                            </span>
                            <div className="text-sm text-[#424242]">
                                Rating: {expert.rating}
                            </div>
                            <span className="text-sm text-gray-500 block mb-4">
                                City: {expert.city}
                            </span>
                           
                            <button className="bg-[#00acc1] text-white rounded-md px-6 py-2">
                                Know More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Doctors;
