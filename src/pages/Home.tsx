import React from 'react'
import Banner from '../components/Banner';
import Info from '../components/Info';
import DividerImg from '../components/DividerImg'
import Contact from '../components/Contact';
import Events from '../components/Events';

const Home: React.FC = () => {
  return(
    <div>
        <Banner/>
        <Info />
        <DividerImg />
        <div style={{background: "#fff"}}>
          <Contact />
        </div>
        <Events />
    </div>
  ) 
}

export default Home
