import React from 'react'
import { Link } from 'react-router-dom';

const Banner: React.FC = () => {
    return (
        <div data-cy='backgroundImageOne' className="bg-hero-image bg-center bg-cover flex items-center justify-center flex-col sm:flex-row text-center"  style={{ height: 'calc(100vh - 120px)' }}>
            <Link to="https://www.toasttab.com/blu-dog-diner-3216-judson-st-unit-b/v3" data-cy='orderOnlineLink' className="font-1-semibold px-16 py-4 m-6 border-8 border-white text-2xl text-white bg-black bg-opacity-70 hover:bg-white hover:bg-opacity-95 hover:border-opacity-5 hover:text-black transition-colors duration-500">ORDER ONLINE</Link>
            <Link to="/menu" data-cy='seeTheMenuLink' className="font-1-semibold px-16 py-4 m-6 border-8 border-white text-2xl text-white bg-black bg-opacity-70 hover:bg-white hover:bg-opacity-95 hover:border-opacity-5 hover:text-black transition-colors duration-500">SEE THE MENU</Link>
        </div>
    );
}

export default Banner
