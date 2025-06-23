"use client"
import { useEffect, useState } from 'react'

function Navbar() {

    const [isOpen, setIsopen] = useState(true)

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 768px)");

        const handleResize = () => {
            setIsopen(mediaQuery.matches);
        };

        handleResize();
        mediaQuery.addEventListener("change", handleResize);

        return () => {
            mediaQuery.removeEventListener("change", handleResize);
        };
    }, []);

    return (
        <nav className='sticky top-0 left-0 right-0 z-50 flex flex-row font-poppins border border-gray-300 bg-white'>
            <h1 className='w-3/12 h-full py-10 text-3xl font-medium border-r-[1px] border-gray-300 px-12'>Desgy Solutions</h1>
            <ul className='w-6/12 flex flex-row justify-between gap-6 items-center px-24  border-r-[1px] border-gray-300 text-gray-600'>
                <li>About Us</li>
                <li>Services</li>
                <li>FAQ</li>
                <li>Blog</li>
                <li>Testimonial</li>
            </ul>
            <div className='w-3/12 flex justify-items-center py-3'>
                <button className='w-2/5 mx-auto my-auto h-16 border rounded-full border-gray-300'>Contact Us</button>
            </div>
        </nav>
    )
}

export default Navbar


