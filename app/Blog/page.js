import React from 'react'
import Header from '@/Components/Header'
function page() {
  return (
    <>
      <Header />
      <section className='flex flex-col items-center text-center gap-5 w-2/3 mx-auto'>
        <p className='sm-text font-bold'>cowork chronicles</p>
        <p className='text-5xl'>insights,innovation,and <img className="inline-block h-11" src='\Rectangle 4.jpg' />Inspiration</p>
        <p className='sm-text'>Stay updated on the latest trends in coworking, productivity tips, and success stories that define the Cowork experience.</p>
      </section>

      <section>
        <article>
          <img src='blog-img\img-1\Image.jpg'/>
          <p><span>Trending</span> 7min read</p>
          <p>Navigating the Future: Trends in Modern Coworking Spaces</p>
          <p>Read more {'>'}</p>
        </article>
        <article>
          <img src='blog-img\img-2\Image.jpg' />
          <p><span>Productivity</span> 5min read</p>
          <p>Mastering Productivity: Tips from Cowork's High Achievers</p>
          <p>Read more {'>'}</p>
        </article>
        <article>
          <img src='blog-img\img-3\Image.jpg' />
          <p><span>Talk</span> 10min read</p>
          <p>Tech Talk: The Backbone of Cowork's Seamless Experience</p>
          <p>Read more {'>'}</p>
        </article>
      </section>

    </>
  )
}

export default page