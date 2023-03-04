import React from 'react'
import profileImage from '../assets/george.png'
import {HiArrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'




const Home = () => {
  return (
    // the name in the first div is for the react smooth scrolling
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className=' max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row 
      '>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a MERN Full-Stack WEB-Developer</h2>
          <p className='text-gray-500 py-4 max-w-md
          '>
            Hello, currently i am an enrolled student in the MERN Full-Stack Web Development Course at the Digital Career Institute with Masters studies in Marketing Management & Research. looking for a new challenging position as a Junior Developer starting July 2023.
          </p>

          <div> 
            <Link to="portfolio" smooth duration={500}  className='group text-white w-fit px-6 py-3 my-2 flex item-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio 
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowRight size={20} className="ml-2 " />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={profileImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full
          ' />
        </div>
      </div>
    </div>
  )
}

export default Home