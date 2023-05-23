import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Nav: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = (to: string) => {
        if (window.location.pathname !== '/') {
            navigate('/');
        }
        setTimeout(() => {
            const element = document.getElementById(to);
            if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 0);
    };

    return (
        <div className="relative">
            <div className="absolute left-10 top-6 ml-4 z-10">
                <RouterLink to="/">
                    <img src="https://i.imgur.com/hYRkYh0.png" alt="Logo" className="h-20 w-20" />
                </RouterLink>
            </div>
            <div className="text-center pt-6 pb-4 navbar-shadow">
                <RouterLink to="/" className="text-4xl font-1-bold text-custom-red mb-6">BLU DOG DINER</RouterLink>
                <div className="space-x-16 mt-4">
                    <ScrollLink
                        onClick={() => handleClick('events')}
                        to="events"
                        spy={true}
                        smooth={true}
                        duration={200}
                        offset={-500} // height of your navbar
                        className="cursor-pointer font-1-semibold text-md text-custom-red hover:text-custom-red-hover transition-colors duration-700"
                    >
                        EVENTS
                    </ScrollLink>
                    <RouterLink to="/menu" className="font-1-semibold text-md text-custom-red hover:text-custom-red-hover transition-colors duration-700">MENU</RouterLink>
                    <RouterLink to="/order" className="font-1-semibold text-md text-custom-red hover:text-custom-red-hover transition-colors duration-700">ORDER ONLINE</RouterLink>
                    <ScrollLink
                        onClick={() => handleClick('contact')}
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={200}
                        offset={-500} // height of your navbar
                        className="cursor-pointer font-1-semibold text-md text-custom-red hover:text-custom-red-hover transition-colors duration-700"
                    >
                        CONTACT US
                    </ScrollLink>
                </div>
            </div>
        </div>
    );
}

export default Nav;
