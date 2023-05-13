import React from 'react'
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
    return (
      <div className="text-center pt-6 pb-4 navbar-shadow">
      <Link to="/" className="text-4xl font-1-bold text-custom-red mb-6">BLUE DOG DINER</Link>
      <div className="space-x-16 mt-4">
      <Link to="/events" className="font-1-semibold text-md text-custom-red hover:text-custom-red-hover transition-colors duration-700">EVENTS</Link>
            <Link to="/menu" className="font-1-semibold text-md text-custom-red hover:text-custom-red-hover transition-colors duration-700">MENU</Link>
            <Link to="/order" className="font-1-semibold text-md text-custom-red hover:text-custom-red-hover transition-colors duration-700">ORDER ONLINE</Link>
            <Link to="/contact" className="font-1-semibold text-md text-custom-red hover:text-custom-red-hover transition-colors duration-700">CONTACT US</Link>
      </div>
    </div>
      );
}

export default Nav
