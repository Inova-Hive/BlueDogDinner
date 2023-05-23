import React from 'react'
import { Link } from 'react-router-dom';

const Info: React.FC = () => {
  return(
    <div className="py-12 pb-24 divider-1-shadow">
        <div className="text-center pt-6 mx-auto w-full md:w-2/3 lg:w-1/2 xl:w-2/5 mb-4">
            <h2 className="text-4xl font-1-bold text-custom-red mt-16 mb-8">Why Blu Dog Diner's Hot Dogs are the Best in Town</h2>
            <p className="text-lg font-1-bold text-custom-blue mx-auto w-full md:w-3/4">Our hot dogs are made with 100% organic ingredients and are grilled to perfection.</p>          
        </div>
        
        {/* divider image */}
        <div className='flex justify-center mt-16 mb-28'>
            <img className="w-80" src="https://i.imgur.com/Ke1QQlL.png" alt="page divider" />
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <img className="w-full md:w-1/2 lg:w-1/3 box-shadow1 mb-8 md:mb-0 rounded-lg" src="https://i.imgur.com/bZOGUn8.jpg" alt="Hot Dogs"/> {/* Replace with your actual Imgur link */}
            <div className="flex flex-col justify-between items-center  w-full md:w-1/2 lg:w-1/3">
                <p className="text-lg font-1-bold text-custom-blue text-center mb-8"> We offer over <span className='text-xl text-custom-red'>15</span> different types of hot dogs, each with its unique flavor and ingredients.</p>
                <Link to="/menu" className="font-1-semibold px-8 py-3 m-6 border-4 border-custom-red text-xl text-custom-red hover:bg-custom-red hover:text-white transition-colors duration-500">
                    <button>Check our Menu</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Info
