import React, { useEffect } from 'react'
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import Banner from '../components/Banner';
import Info from '../components/Info';
import DividerImg from '../components/DividerImg'
import Contact from '../components/Contact';
import Events from '../components/Events';

const Home: React.FC = () => {
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const offset = 500; // height of your navbar or any desired offset
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element ? element.getBoundingClientRect().top : 0;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    if (element) {
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        scrollToSection(location.hash.slice(1));
      }, 0);
    }
  }, [location]);

  return(
    <div id="home" className='main-background'>
      <div className='hazy-layer'></div>
      <div className="sticky-social">
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="instagram">
            <FaInstagram size="2em"/>
        </a>
        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer" className="twitter">
            <FaTwitter size="2em"/>
        </a>
      </div>
      <Banner/>
      <Info />
      <DividerImg /> 
      <div id="contact">
        <Contact />
      </div>
      <div id="events">
        <Events />
      </div>
    </div>
  ) 
}

export default Home
