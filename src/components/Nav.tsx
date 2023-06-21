import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons

interface NavProps {
    handleLogOut: () => void;
    authenticated: boolean;
}

const Nav: React.FC<NavProps> = ({ handleLogOut, authenticated }) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false); // State for the dropdown menu

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
            <div className="absolute left-10 top-6 ml-4 z-10 md:block hidden" data-cy='logo'>
                <RouterLink to="/">
                    <img src="https://i.imgur.com/hYRkYh0.png" alt="Logo" className="h-20 w-20" />
                </RouterLink>
            </div>

            <div className="text-center pt-6 pb-4 navbar-shadow" data-cy='title'>
                <RouterLink to="/" className="text-7xl brand-font text-custom-blue">Blu Dog Diner</RouterLink>
                <div className="mt-4 flex flex-col sm:flex-row xl:justify-center xl:items-center text-center">
                    <div className="w-full xl:w-2/3 space-y-4 xl:space-y-0 xl:space-x-16 text-center justify-center">
                        {/* Hamburger icon for xlall screens */}
                        <div className="flex relative bottom-2 justify-end items-center mr-8 xl:hidden">
                            <button data-cy='svgBtn' onClick={() => setOpen(!open)} className="text-2xl">
                                {open ? <FaTimes /> : <FaBars />}
                            </button>
                        </div>
                        {/* Nav links - hidden on xl screens, visible and horizontal on larger screens */}
                        <div className={`flex flex-col xl:flex-row xl:space-x-8 space-y-2 xl:space-y-0 xl:justify-center ${open ? 'block' : 'hidden'} xl:block`}>
                            <ScrollLink
                                onClick={() => handleClick('events')}
                                to="events"
                                spy={true}
                                smooth={true}
                                duration={200}
                                offset={100} // height of your navbar
                                className="cursor-pointer font-1-semibold text-lg text-custom-red hover:text-custom-blue transition-colors duration-700 relative underline-effect"
                                data-cy='hamburgerOptions'
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
                            <RouterLink className="sm:absolute flex justify-center sm:right-8 sm:bottom-3" to="https://toasttakeout.page.link/restaurantButton" target="_blank"><img src="https://i.imgur.com/TqGSIlB.png" alt="toast app download button"></img></RouterLink>

                            {authenticated && <button onClick={handleLogOut} className="font-1-semibold text-lg text-custom-red hover:text-custom-blue transition-colors duration-700 underline-effect">LOGOUT</button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;
