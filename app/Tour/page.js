import React from 'react'
import Header from '@/Components/Header'
function page() {
    return (
        <>
            <Header />
            <section className='text-center mt-10 w-1/2 mx-auto flex flex-col items-center gap-3'>
                <p></p>
                <p className='text-3xl '>Explore Cowork Through Our <img className='inline-block w-1/4' src='\Rectangle-1.jpg' />Lens</p>
                <p className='sm-text'>Experience the essence of Cowork before setting foot in our dynamic spaces. Our immersive video tour gives you a sneak peek into the vibrant atmosphere, cutting-edge facilities, and collaborative energy that define the Cowork experience.</p>
                <button>Explore Spaces</button>
            </section>

            <img src='\explore\Image.jpg' className='w-2/3 mx-auto mt-6' />

            <section className='flex p-4 justify-evenly mt-20'>
                <article className='w-1/3'>
                    <p className='sm-text'>cowork in number</p>
                    <p className='text-3xl font-bold'>Transformative Statistics That Speak Volumes</p>
                    <div id='stats-grid' className='sm-text'>
                        <div ><p>240%<span id='O-1'></span></p>Community Growth</div>
                        <div><p>99%<span id='O-2'></span></p>Technology Uptime</div>
                        <div><p>50+%<span id='O-3'></span></p>Happy Members</div>
                        <div><p>100%<span id='O-4'></span></p>Renewable Energy Sources</div>
                    </div>
                </article>
                <img src='explore-2\Image.jpg' className='h-96' />
            </section>
        </>
    )
}

export default page