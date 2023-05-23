import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="bg-neutral-800 py-4">
            <div className="text-center">
                <div className="space-x-16 mt-4">
                    <RouterLink to="/" className="font-1-semibold text-md text-custom-red hover:text-custom-red-hover transition-colors duration-700">HOME</RouterLink>
                    <RouterLink to="/menu" className="font-1-semibold text-md text-custom-red hover:text-custom-red-hover transition-colors duration-700">MENU</RouterLink>
                    <RouterLink to="/order" className="font-1-semibold text-md text-custom-red hover:text-custom-red-hover transition-colors duration-700">ORDER ONLINE</RouterLink>
                    <RouterLink to="/contact" className="font-1-semibold text-md text-custom-red hover:text-custom-red-hover transition-colors duration-700">CONTACT US</RouterLink>
                    <RouterLink to="/privacy-policy" className="font-1-semibold text-md text-custom-red hover:text-custom-red-hover transition-colors duration-700">PRIVACY POLICY</RouterLink>
                    <RouterLink to="/terms-of-service" className="font-1-semibold text-md text-custom-red hover:text-custom-red-hover transition-colors duration-700">TERMS OF SERVICE</RouterLink>
                </div>
                <div className="flex justify-center mt-4">
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 mx-2 hover:text-white">
                        <FaTwitter size={20} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 mx-2 hover:text-white">
                        <FaInstagram size={20} />
                    </a>
                </div>
                <p className="mt-4 text-gray-200">Powered by: Inova Hive</p>
                <button className="text-gray-500 mt-4 cursor-pointer" onClick={scrollToTop}>
                    Back to Top
                </button>
            </div>
        </div>
    );
}

export default Footer;