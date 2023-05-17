import React from 'react'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom';


const Home: React.FC = () => {
  return(
    <div>
        <Banner/>
        <div className="text-center pt-6 pb-4 mx-auto w-2/5 mb-32">
          <h2 className="text-3xl font-1-bold text-custom-red mt-24 mb-6">Why Blue Dog Diner's Hot Dogs are the Best in Town</h2>
          <p className="text-xl font-1-bold text-custom-red">Our hot dogs are made with 100% organic ingredients and are grilled to perfection.</p>  
          
        </div>
        
        <div className="flex items-center justify-center gap-32">
          <img className="w-96 h-60" src="https://i.imgur.com/bZOGUn8.jpg" alt="Hot Dogs"/> {/* Replace with your actual Imgur link */}
          <div className="flex flex-col justify-between items-center  h-full w-1/4">
            <p className="text-xl font-1-bold text-custom-red text-center"> We offer over 20 different types of hot dogs, each with its unique flavor and ingredients.</p>
            <Link to="/menu" className="font-1-semibold px-10 py-2 m-6 border-8 border-custom-red text-xl text-custom-red hover:bg-custom-red hover:text-white transition-colors duration-500">
              <button>Check our Menu</button>
            </Link>
          </div>
        </div>
    </div>
  ) 
}

export default Home
