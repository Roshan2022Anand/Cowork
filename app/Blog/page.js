import React from 'react'
import Header from '@/Components/Header'
function page() {
  return (
    <>
      <Header />
    <div className='flex flex-col gap-24'>
      <section className='flex flex-col items-center text-center gap-5 w-2/3 mx-auto'>
        <p className='sm-text font-bold'>cowork chronicles</p>
        <p className='text-5xl'>insights,innovation,and <img className="inline-block h-11" src='\Rectangle 4.jpg' />Inspiration</p>
        <p className='sm-text'>Stay updated on the latest trends in coworking, productivity tips, and success stories that define the Cowork experience.</p>
      </section>

      <section className='flex justify-between' id='features'>
        <article className='w-1/3 p-2'>
          <img src='blog-img\img-1\Image.jpg'/>
          <p className='sm-text'><span style={{ backgroundColor:'#a6e8f6',padding:'0.3em',borderRadius:'5px'}}>Trending</span> 7min read</p>
          <p>Navigating the Future: Trends in Modern Coworking Spaces</p>
          <p className='sm-text'>Read more {'>'}</p>
        </article>
        <article className='w-1/3 p-2'>
          <img src='blog-img\img-2\Image.jpg' />
          <p className='sm-text'><span style={{ backgroundColor: '#fdbddd', padding: '0.3em', borderRadius: '5px' }}>Productivity</span> 5min read</p>
          <p>Mastering Productivity: Tips from Cowork's High Achievers</p>
          <p className='sm-text'>Read more {'>'}</p>
        </article>
        <article className='w-1/3 p-2'>
          <img src='blog-img\img-3\Image.jpg' />
          <p className='sm-text'><span style={{ backgroundColor: '#d2f984', padding: '0.3em', borderRadius: '5px' }}>Talk</span> 10min read</p>
          <p>Tech Talk: The Backbone of Cowork's Seamless Experience</p>
          <p className='sm-text'>Read more {'>'}</p>
        </article>
      </section>

      <button className='mx-auto block p-2'>View all</button>

      <section className='bg-black text-white p-2 rounded-md mx-2 flex gap-3'>
        <article className='w-1/2 flex flex-col gap-3'>
          <p className='text-2xl font-bold'>Cowork</p>
          <p className='sm-text'>Join our newsletter to stay up to date on features and releases.</p>
          <div id='input'><input type='mail' placeholder='Enter your email'/><button>Subscribe</button></div>
          <p className='sm-text'>By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>
        </article>
        <article className='flex justify-between  sm-text w-1/2'>
          <ul className='flex flex-col gap-3'>
            <p className='md-text'>EXPLORE MORE</p>
            <li>Home</li>
            <li>About</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Events</li>
          </ul>
          <ul className='flex flex-col gap-3'>
            <p className='md-text'>STAY CONNECTED</p>
            <li>Subscribe</li>
            <li>Member Stories</li>
            <li>Location</li>
            <li>Write for Us</li>
          </ul>
          <ul className='flex flex-col gap-3'>
            <p className='md-text'>FOLLOW US</p>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>X</li>
            <li>Linkedin</li>
            <li>Youtube</li>
          </ul>
        </article>
      </section>
    </div>
    </>
  )
}

export default page