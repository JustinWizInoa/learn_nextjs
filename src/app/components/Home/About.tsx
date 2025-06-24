import React from 'react'

function About() {
    return (
        <div className='mt-20 bg-gray-200 m-9 rounded-2xl'>
            <div className='text-center p-20'>
                <h1 className='text-[#0066ff]'>ABOUT US</h1>
                <h1 className='font-bold text-6xl'>Know more about us.</h1>
            </div>
            <div className=''>
                <div className='flex justify-around m-20 p-1.5 h-96 gap-24'>
                    <div className='rounded-3xl bg-white shadow-2xl p-3.5'>
                        <div className='text-3xl font-semibold'>About us.</div>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem</p>
                        <p>Learn more</p>
                    </div>
                    <div className='rounded-3xl bg-white shadow-2xl p-3.5'>
                        <div className='text-3xl font-semibold'>Services.</div>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem</p>
                        <p>Learn more</p>
                    </div>
                    <div className='rounded-3xl bg-white shadow-2xl p-3.5'>
                        <div className='text-3xl font-semibold'>Our Works.</div>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem</p>
                        <p>Learn more</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
