import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faMapLocation } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import boot from "../assets/svgs/boot.svg"

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
    <section>
       <h1 className=' mb-10 prose text-5xl text-center text-blue-900 font-serif font-extrabold  mt-10 tracking-wider leading-tight'>Best Bootcamps in Kenya</h1>
    <div className='grid grid-cols-12 gap-4 '>
      <div className=' col-start-2 col-span-7'>
        <p className='text-xl text-blue-950 font-bold p-10 mt- tracking-wider leading-tight'> Coding bootcamps in Kenya are highly competitive and offer intensive training programs that equip students with the skills needed to break into the technology sector. Tech Mentor is here to help you choose your ideal bootcamp and kickstart your career in tech!</p>
      </div>
      <div className='col-span-3  '>
        <img src={boot} alt="bootcamp" />
      </div>
    </div>  
    <div className="grid grid-cols-3 mt-20 gap-4 ml-20 mr-20 relative">  
      {bootcamps.map((bootcamp) => (
        <div key={bootcamp.id} className="  bg-blue-9 max-w-md p-x-7 mx-4 my-8 bg-white rounded-xl shadow-xl overflow-hidden">
          <div className='bg-blue-900 h-12 '>
            {/* <h1 className='ml-8 text-white text-2xl '># {bootcamp.id} </h1> */}
          </div>
          <img className="w-32 z-20 ml-28 absolute bg-slate-900 border-spacing-7 border -top-3   h-32 object-cover" src={bootcamp.image} alt={bootcamp.name} />
          <div className="p-4 mt-8">
            <h2 className="text-xl  font-bold mb-2 text-center text-blue-950">{bootcamp.name}</h2>
            <p className="text-blue-900 font-sans prose line-clamp-6 text-base">{bootcamp.description}</p>

            <div className='flex justify-around mt-4 bg-blue-50 rounded-md p-2 font-semibold text-blue-950'>
              <p className=" text-sm mr-2">
                location:
                <span className='text-gray-500'>   {bootcamp.location}</span> 
              </p>
              <p className="  text-sm ">
                   Mode: 
                   <span className='text-gray-500 ml-1'>{bootcamp.learning_mode}</span> 
              </p>
            
            </div>

            <ul className="my-4 bg-blue-50 p-2 rounded-xl ">
              <h1 className='text-blue-800 text-xl text-center mb-2'>courses</h1>
              {bootcamp.courses.map((course, index) => (
                <li key={index} className="mb-2">
                 <FontAwesomeIcon icon={faCheckCircle} className="text-blue-800 mr-3"/>
                  {course}
                </li>
              ))}
            </ul>

           <div className='flex justify-around'>
              <p className="text-yellow-400 text-sm">
                {Array.from(Array(Math.floor(bootcamp.stars)).keys()).map((i) => (
                  <FontAwesomeIcon key={i} icon={faStar} />
                ))}
                {bootcamp.stars % 1 !== 0 && (
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                )}
               <span className='text-blue-800 ml-2'>{bootcamp.stars}/5</span> 
              </p>

              <p className='text-blue-600'>
               <FontAwesomeIcon icon={faComment} className="mr-2"/>
                  <span className='underline cursor-pointer'>Reviews </span> 
              </p>

              </div>
          
            {/* <div className="mt-4">
              <a
                href={bootcamp.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-500 py-2 px-4 rounded hover:bg-blue-600"
              >
                Visit Website
              </a>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  </section>
  );
};

export default BootcampsList;
