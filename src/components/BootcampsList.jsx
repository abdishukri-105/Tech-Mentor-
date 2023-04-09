import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BootcampsList = () => {
  const [bootcamps, setBootcamps] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/bootcamps')
      .then((response) => {
        setBootcamps(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {bootcamps.map((bootcamp) => (
        <div key={bootcamp.id} className="max-w-md mx-4 my-8 bg-white rounded-lg shadow-lg overflow-hidden">
          <img className="w-full h-56 object-cover" src={bootcamp.image} alt={bootcamp.name} />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{bootcamp.name}</h2>
            <p className="text-gray-700 text-base">{bootcamp.description}</p>
            <ul className="my-4">
              {bootcamp.courses.map((course, index) => (
                <li key={index} className="mb-2">
                  <i className="far fa-check-circle mr-2 text-green-500"></i>
                  {course}
                </li>
              ))}
            </ul>
            <p className="text-gray-700 text-sm">
              <i className="fas fa-map-marker-alt mr-2"></i>
              {bootcamp.location}
            </p>
            <p className="text-gray-700 text-sm">
              <i className="fas fa-laptop mr-2"></i>
              {bootcamp.learningMode}
            </p>
            <div className="mt-4">
              <a
                href={bootcamp.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-500 py-2 px-4 rounded hover:bg-blue-600"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BootcampsList;
