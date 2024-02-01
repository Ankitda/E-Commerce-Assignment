import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IsRendering } from '../App';
import logo from "../assets/E-Store-logo.jpg"

const Header = () => {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { setIsHeroRendering } = useContext(IsRendering);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className="font-mono bg-gradient-to-r from-white to-gray-300 bg-opacity-50 p-4">
                <div className="container mx-auto flex justify-between items-center">

                    {/* Logo */}
                    <span className="text-black text-lg font-bold"><img src={logo} alt="logo" className='text-xs h-10 w-15' /></span>

                    <div className="hidden md:flex justify-center items-center space-x-4">
                        <ul className="flex space-x-4">
                            <li>
                                <NavLink
                                    to={"home"}
                                    className="text-black hover:text-gray-700 hover:scale-105 transition-all duration-300 ease-in-out hover:bg-white hover:p-3 hover:rounded-lg font-medium"
                                    onClick={() => setIsHeroRendering(false)
                                    }>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={"store"}
                                    className="text-black hover:text-gray-700 hover:scale-105 transition-all duration-300 ease-in-out hover:bg-white hover:p-3 hover:rounded-lg font-medium"
                                    onClick={() => setIsHeroRendering(false)
                                    }>
                                    Shop
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={"contact"}
                                    className="text-black hover:text-gray-700 hover:scale-105 transition-all duration-300 ease-in-out hover:bg-white hover:p-3 hover:rounded-lg font-medium"
                                    onClick={() => setIsHeroRendering(false)
                                    }>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="md:hidden">
                        <button onClick={toggleMobileMenu} className="text-black">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>

                </div>
            </nav>

            {/* Mobile Menu (hidden by default) */}
            <div className={`md:hidden transition-all duration-700 ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'} bg-gradient-to-r from-white to-gray-300 bg-opacity-50 p-2`}>
                <ul className={`${isMobileMenuOpen ? 'transition-all duration-700 flex flex-col space-y-2 items-center' : 'hidden'}`}>
                  
                    <li><NavLink
                        to={"home"}
                        className="text-black hover:text-gray-700 hover:scale-105 transition-all duration-300 ease-in-out hover:bg-white hover:p-3 hover:rounded-lg font-medium"
                        onClick={() => setIsHeroRendering(false)
                        }>
                        Home
                    </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"store"}
                            className="text-black hover:text-gray-700 hover:scale-105 transition-all duration-300 ease-in-out hover:bg-white hover:p-3 hover:rounded-lg font-medium"
                            onClick={() => setIsHeroRendering(false)
                            }>
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"contact"}
                            className="text-black hover:text-gray-700 hover:scale-105 transition-all duration-300 ease-in-out hover:bg-white hover:p-3 hover:rounded-lg font-medium"
                            onClick={() => setIsHeroRendering(false)
                            }>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Header;
