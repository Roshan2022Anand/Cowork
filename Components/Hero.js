import React from 'react'

function Hero() {
    return (
        <>
            <section className='flex justify-around p-2 mt-16 mb-24'>
                <article className='w-2/4 h-1/2'>
                    <p className='font-bold text-6xl'>Elevate Your Workspace with Cowork</p>
                    <p className='sm-text'>Welcome to Cowork  where innovation meets collaboration in the heart  of productivity! Unleash 🚀 your potential in our thoughtfully designed coworking spaces, tailored to inspire creativity and foster connections.</p>
                    <button className='mt-10'>Claim Your Spot</button>
                </article>
                    <img className='w-1/3' src="\hero-img\Image.jpg"/>
            </section>
        </>
    )
}

export default Hero