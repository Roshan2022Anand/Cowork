"use client"
import React, { useState } from 'react'
import Header from '@/Components/Header'


const page = () => {
  const [rotate, setRotate] = useState(false);

  const dropBtn = (id) => {
    let dropAns = document.getElementById(id);
    if (dropAns.classList.contains("dropMe")) {
      dropAns.classList.remove("dropMe");
      dropAns.style.display = "none";
    }
    else {
      dropAns.classList.add("dropMe");
      dropAns.style.display = "block";

    }
    console.log(dropAns);

  }
  return (
    <>
      <Header />
      <div className='flex flex-col gap-28'>
      <section className='text-center mt-5'>
        <p className='sm-text'>COWORK IN WORDS</p>
        <p className='text-xl font-bold'>Hear it from Our Clients</p>
        <div id='cards'>
          <div>
            <img src='avatars\Avatar-1.jpg' />
            <p className='sm-text'>"The 24/7 access and secure facilities have been incredibly convenient for my team's flexible schedules. We love the coworking space!"</p>
            <p>Liam Brown</p>
            <p className='sm-text'>Software Engineer, TechStartup Innovations</p>
          </div>
          <div>
            <img src='avatars\Avatar-2.jpg' />
            <p className='sm-text'>“The aesthetics of Cowork are inspiring. The attention to detail in the design creates an atmosphere that sparks creativity. It's a place where ideas flow effortlessly, and collaboration happens organically.”</p>
            <p>Michael Rodriguez</p>
            <p className='sm-text'>Creative Director, DesignCraft Studio</p>
          </div>
          <div>
            <img src='avatars\Avatar-3.jpg' />
            <p className='sm-text'>"As a freelance designer, I was getting tired of working from home or coffee shops. The coworking space has provided me with a productive and professional environment to focus on my work."</p>
            <p>Michael Thompson</p>
            <p className='sm-text'>Graphic Designer, DesignCo</p>
          </div>
          <div>
            <img src='avatars\Avatar-4.jpg' />
            <p className='sm-text'>"The coworking space has been a wonderful resource for my team. The open floor plan and dedicated private offices allow us to collaborate and concentrate as needed."</p>
            <p>David Wilson</p>
            <p className='sm-text'>Project Manager, SoftwareSolutions LLC</p>
          </div>
          <div>
            <img src='avatars\Avatar-5.jpg' />
            <p className='sm-text'>"The flexible membership options and amenities like high-speed internet, printers, and meeting rooms have made this coworking space a perfect fit for my small business."</p>
            <p>Alex Nguyen</p>
            <p className='sm-text'>Marketing Consultant, Maverick Marketing</p>
          </div>
        </div>
      </section>


      <section className='flex justify-around'>
        <article className='w-1/3 flex flex-col gap-3'>
          <p className='sm-text font-bold'>FREQUENTLY ASKED QUESTIONS</p>
          <p className='text-5xl'>Your Roadmap to Coworking Clarity</p>
          <p className='sm-text'>Frequently asked question ordered by popularity.Remeber taht if the visitor has not commited to call to action , they may still have question (doubts) that can be answered.</p>

        </article>
        <article className='w-1/3'>
          <div className='question'>
            <div className='flex justify-between'>
              <p>How flexible are Cowork,s membership plan?</p>
              <button onClick={() => {
                dropBtn('q1');
                setRotate(!rotate);
              }} className='drop-btn'
                style={{
                  transform: rotate ? 'rotate(180deg)' : 'rotate(0deg)'
                }}>^</button>
            </div>
            <p id='q1'>Frequently asked question ordered by  pop.Remeber that if the visitor has not committed to the call action , they may still have question (doubts) that can be answered.</p>
          </div>

          <div className='question'>
            <div className='flex gap-3'>
              <p>What kind of events and networking opportunities does Cowork provide?</p>
              <button onClick={() => {
                dropBtn('q2');
                setRotate(!rotate);
              }} className='drop-btn'
                style={{
                  transform: rotate ? 'rotate(180deg)' : 'rotate(0deg)'
                }}>^</button>
            </div>
            <p id='q2'>Frequently asked question ordered by  pop.Remeber that if the visitor has not committed.</p>
          </div>

          <div className='question'>
            <div className='flex gap-3'>
              <p>Can I tour the Cowork space before committing to a membership?</p>
              <button onClick={() => {
                dropBtn('q3');
                setRotate(!rotate);
              }} className='drop-btn'
                style={{
                  transform: rotate ? 'rotate(180deg)' : 'rotate(0deg)'
                }}>^</button>
            </div>
            <p id='q3'>Frequently asked question ordered by  pop.Remeber that if the visitor has not committed to the call action , they may still have question (doubts) that can be answered.</p>
          </div>

          <div className='question'>
            <div className='flex gap-3'>
              <p>Is Cowork suitable for remote teams and distributed workforces?</p>
              <button onClick={() => {
                dropBtn('q4');
                setRotate(!rotate);
              }} className='drop-btn'
                style={{
                  transform: rotate ? 'rotate(180deg)' : 'rotate(0deg)'
                }}>^</button>
            </div>
            <p id='q4'>Frequently asked question ordered by  pop.Remeber that if the visitor has not committed to the call action , they may still have question (doubts) that can be answered.</p>
          </div>
        </article>
      </section>

      <section className='flex flex-col gap-5 items-center mx-auto w-2/3'>
        <p className='text-4xl text-center'>Seize <img className="inline-block h-10" src='\Rectangle 3.jpg'/> The Moment-join Cowork Today!</p>
        <p className='sm-text'>Uncover the transformative power of Cowork as echoed by those who've made it their professional haven. This is more than finding a desk; it's discovering a community that fuels your journey to success.</p>
        <button>Claim Your Spot</button>
      </section>
      </div>
    </>
  )
}

export default page