import React from 'react'
import Banner from '../components/Banner';
import Info from '../components/Info';
import DividerImg from '../components/DividerImg'
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return(
    <div>
        <Banner/>
        <Info />
        <DividerImg />
        <Contact />
    </div>
  ) 
}

export default Home
