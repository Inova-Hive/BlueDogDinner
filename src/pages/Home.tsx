import React from 'react'
import Banner from '../components/Banner';
import Info from '../components/Info';
import { Link } from 'react-router-dom';


const Home: React.FC = () => {
  return(
    <div>
        <Banner/>
        <Info />
        
    </div>
  ) 
}

export default Home
