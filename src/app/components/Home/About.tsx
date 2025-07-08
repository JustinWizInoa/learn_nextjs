'use client';
import { ChevronRight } from 'lucide-react';
import React from 'react';

const aboutBanner = [
    {
        title: "About us.",
        icon: 'https://themewagon.github.io/Desgy//images/aboutus/imgOne.svg',
        desc: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem`,
        learn: "Learn more"
    },
    {
        title: "Services.",
        icon: 'https://themewagon.github.io/Desgy//images/aboutus/imgTwo.svg',
        desc: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem`,
        learn: "Learn more"
    },
    {
        title: "Our Works.",
        icon: 'https://themewagon.github.io/Desgy//images/aboutus/imgThree.svg',
        desc: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem`,
        learn: "Learn more"
    }
];

function About() {
    return (
        <div className='mt-32 bg-gray-100 p-4 rounded-3xl m-10 '>
            <div className='text-center p-20'>
                <h1 className='text-[#0066ff]'>ABOUT US</h1>
                <h1 className='font-bold text-6xl'>Know more about us.</h1>
            </div>
            <div className='flex justify-around m-20 p-1.5 h-96 gap-24 '>
                {
                    aboutBanner?.map((item, index) =>
                        <div className='rounded-3xl bg-white shadow-2xl p-3.5 hover:bg-blue-900 hover:text-blue-50' key={index}>
                            <div className='text-3xl font-semibold mb-10 sm:mb-9 md:mb-8 '>{item.title}</div>
                            <img src={item.icon} alt='icon' />
                            <p className='mt-6'>{item.desc}</p>
                            <p
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className='text-blue-700 font-semibold hover:underline cursor-pointer mt-6 flex items-center hover:text-blue-50'
                            >
                                {item.learn} <ChevronRight />
                            </p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default About
