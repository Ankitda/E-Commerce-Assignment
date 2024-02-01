import React from 'react'
import { photos } from '../data/randomPhoto'
import { Link } from 'react-router-dom'

const Hero = () => {

    return (
        <section className="hero relative bg-cover bg-center h-screen flex items-center" style={{ backgroundImage: `url(${photos[Math.abs(Math.floor(Math.random() * photos.length))]})` }}>
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-lg"></div>
            <div className="container mx-auto text-center text-white relative z-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to Your Website</h1>
                <p className="text-base md:text-lg lg:text-xl mb-8">Discover amazing experiences tailored for you.</p>
                <Link to={""} className="bg-gray-600 text-white py-2 px-4 rounded-full hover:bg-gray-300 hover:text-black duration-500">Get Started</Link>
            </div>
        </section>
    )
}

export default Hero