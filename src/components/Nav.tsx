import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

interface NavProps {
    handleLogOut: () => void;
    authenticated: boolean;
}

const Nav: React.FC<NavProps> = ({ handleLogOut, authenticated}) => {
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
                <RouterLink to="/" className="text-7xl brand-font text-custom-blue">Blu Dog Diner</RouterLink>
                <div className="mt-4 flex justify-between items-center">
                    <div className="w-1/3"></div> {/* Left empty section */}
                    <div className="w-2/3 mx-auto space-x-16 text-center">
                        <ScrollLink
                            onClick={() => handleClick('events')}
                            to="events"
                            spy={true}
                            smooth={true}
                            duration={200}
                            offset={100} // height of your navbar
                            className="cursor-pointer font-1-semibold text-lg text-custom-red hover:text-custom-blue transition-colors duration-700 relative underline-effect"
                        >
                            EVENTS
                            <span className="absolute bottom-0 left-1/2 w-0 h-0 bg-custom-red rounded-full transform transition-transform duration-300 hover:w-full hover:h-full hover:-translate-x-1/2 hover:-translate-y-1/2"></span>
                        </ScrollLink>
                        <RouterLink to="/menu" className="font-1-semibold text-lg text-custom-red hover:text-custom-blue transition-colors duration-700 underline-effect">MENU</RouterLink>
                        <ScrollLink
                            onClick={() => handleClick('contact')}
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={200}
                            className="cursor-pointer font-1-semibold text-lg text-custom-red hover:text-custom-blue transition-colors duration-700 relative underline-effect"
                        >
                            CONTACT US
                            <span className="absolute bottom-0 left-1/2 w-0 h-0 bg-custom-red rounded-full transform transition-transform duration-300 hover:w-full hover:h-full hover:-translate-x-1/2 hover:-translate-y-1/2"></span>
                        </ScrollLink>
                        <RouterLink to="/about-us" className="font-1-semibold text-lg text-custom-red hover:text-custom-blue transition-colors duration-700 underline-effect">ABOUT US</RouterLink>
                        <RouterLink to="https://www.toasttab.com/blu-dog-diner-3216-judson-st-unit-b/v3" target="_blank" className="font-1-semibold text-lg text-custom-red hover:text-custom-blue transition-colors duration-700 underline-effect">ORDER ONLINE</RouterLink>
                        {authenticated && <button onClick={handleLogOut} className="font-1-semibold text-lg text-custom-red hover:text-custom-blue transition-colors duration-700 underline-effect">LOGOUT</button>}
                    </div>
                    <div className="w-1/3 text-right ml-16 pr-4">
                        <RouterLink to="https://toasttakeout.page.link/restaurantButton" target="_blank"><img src="https://i.imgur.com/TqGSIlB.png"></img></RouterLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;
