
import { MdOutlineLocalOffer } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { FaStar } from "react-icons/fa";

const Hero = () => {
  return (
   <section className='relation bg-hero bg-cover mr-28 bg-center bg-no-repeat h-screen w-full '>
    <div className='max_pad_container relative ml-24 top-38 xs:top-52'>
        <h1 className='text-[48px] leading-tight md:text-[72px] md:leading-[1.3] mb-8 font-bold capitalize  max-w-[37rem] '>
            Ava Chikan
        </h1>
        <p className='text-gray-50 regular-16 mt-28 max-w-[33rem]'>
             Lorem ipsum dolor Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui recusandae et in. Soluta reiciendis, possimus dignissimos qui deserunt totam laboriosam reprehenderit, asperiores error quaerat voluptates incidunt sint eaque assumenda? Suscipit.
             Vero qu
             Voluptatibum? Earum maiores incidunt, fugiat exercitationem eligendi quod amet neque corrupti laboriosam explicabo eum quisquam ullam repellendus maxime quo consequatur. dolor sit amet consectetur adipisicing elit. Modi rerum eum sequi quam quisquam enim beatae sint corporis ex cupiditate? sit amet consectetur adipisicing elit. Esse eaque enim doloremque voluptates? Quam, tempore.
        </p>
        <div className='flexStart !items-center gap-x-4 my-10'>
            <div className='!regular-24 flexCenter gap-x-3'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>

            </div>
            <div className='bold-16 sm:bold-20'>
                176k<span className='regular-16 sm:regular-20'>Excellent Reviews</span>
            </div>
            <div className='max-xs:flex-col flex gap-2' >
                <NavLink to={''} className={"btn_dark_rounded flexCenter"}>Shop Now</NavLink>
                <NavLink to={''} className={"btn_dark_rounded flexCenter"}><MdOutlineLocalOffer className='
                text-2xl'/>Offers</NavLink>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Hero