import { Link } from "react-router-dom"
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { IsRendering } from "../App";
import { useContext } from "react";

const Footer = () => {
    
    const { setIsHeroRendering } = useContext(IsRendering);

    return (
        <footer className="bg-gradient-to-r from-white to-gray-300 bg-opacity-50 text-black p-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className="mb-4">
                        <h2 className="text-2xl font-bold mb-4">About Us</h2>
                        <p>At E-Store, we are dedicated to providing a seamless online shopping experience. With a passion for quality and a commitment to customer satisfaction, we curate a diverse range of products to elevate your lifestyle. Explore our collections and discover the perfect blend of style, functionality, and convenience</p>
                    </div>

                    <div className="mb-4">
                        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                        <p>Email: ankitsonu240@gmail.com</p>
                        <p>Phone: +91 9348283293</p>
                    </div>

                    <div className="mb-4">
                        <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
                        <ul>
                            <Link
                                to={"home"}
                            >
                                <li
                                    className="hover:text-gray-700 font-medium"
                                    onClick={() => setIsHeroRendering(false)}>
                                    Home
                                </li>
                            </Link>
                            <Link
                                to={"store"}
                            >
                                <li
                                    className="hover:text-gray-700 font-medium"
                                    onClick={() => setIsHeroRendering(false)}>
                                    Store
                                </li>
                            </Link>
                            <Link
                                to={"contact"}
                            >
                                <li
                                    className="hover:text-gray-700 font-medium"
                                    onClick={() => setIsHeroRendering(false)}>
                                    Contact
                                </li>
                            </Link>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
                        <div className="flex space-x-4">
                            <span className="text-black hover:text-gray-700 text-2xl font-medium"><FaLinkedin /></span>
                            <span className="text-black hover:text-gray-700 text-2xl font-medium"><IoLogoGithub /></span>
                            <span className="text-black hover:text-gray-700 text-2xl font-medium"><FaFacebook /></span>
                        </div>
                    </div>

                </div>
            </div>
        </footer>

    )
}

export default Footer