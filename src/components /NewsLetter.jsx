import React from 'react'

const NewsLetter = () => {
  return (
    <section className=' max_padd_container py-12 xl:py-28 bg-white'>
      <div className='mx-auto xl:w-[88%] flexCenter flex-col gap-y-8 w-full
      max-w-[666px]'>
        <h3 className='text-[32px] leading-tight md:text-[36px] md:leading-[1.3] mb-4 font-semibold'>
          Get Exclusive offers on Your Email
        </h3>
        <h4 className='uppercase bold-18'>
          Subscribe to our newsletter and stay updated
        </h4>
        <div className='flexBetween rounded-full ring-1 ring-slate-900/10 
        hover:ring-slate-900/15 bg-primary w-full'>
          <input type='email' placeholder='Your Email Address' className='w-full bg-transparent
          ml-7 border-none outline-none regular-16'/>
          <button className='btn_dark_rounded'>Subscribe</button>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter