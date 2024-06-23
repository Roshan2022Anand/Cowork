import React from 'react'
import Header from "@/Components/Header"
import Hero from "@/Components/Hero"
function page() {
  return (
    <>
      <Header />
      <Hero />
      <p id='why'>Why Choose <img src='\Rectangle 1.jpg' /> Cowork?</p>
      <div className='flex mt-10 gap-6 justify-evenly'>
        <article className='flex flex-col items-center text-center'>
          <img src='flex-1.jpg' className='w-1/6' />
          <p className='font-bold mb-5'>Flexible Spaces</p>
          <p className='sm-text'>Whether you're soloprenure,startup or an established enterprise, our flexible office solutions carter to your evolving needs.</p>
        </article>
        <article className='flex flex-col items-center text-center'>
          <img src='flex-2.jpg' className='w-1/6' />
          <p className='font-bold mb-5'>Flexible Spaces</p>
          <p className='sm-text'>Whether you're soloprenure,startup or an established enterprise, our flexible office solutions carter to your evolving needs.</p>
        </article>
        <article className='flex flex-col items-center text-center'>
          <img src='flex-3.jpg' className='w-1/6' />
          <p className='font-bold mb-5'>Flexible Spaces</p>
          <p className='sm-text'>Whether you're soloprenure,startup or an established enterprise, our flexible office solutions carter to your evolving needs.</p>
        </article>
      </div>
    </>
  )
}

export default page