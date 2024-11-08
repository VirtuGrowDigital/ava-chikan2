import React from 'react'

const ProductDescription = () => {
   
    

  return (

 <div className='mt-20'>
       <div className='flex gap-3 mb-4'>
        <button className='btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36'>
            Description
        </button>
        <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36'>
            Care Guide
        </button>
        <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36'>
            Size Guide
        </button>
    </div>
    <div className='flex flex-col pb-16'>
        <p className='text-sm'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, dicta, non saepe ab atque commodi architecto facilis, libero eveniet omnis modi? Soluta doloremque officia itaque repellat id veritatis obcaecati, nulla explicabo eaque eius sapiente laudantium laboriosam deleniti, dolorem optio nisi rem labore consectetur. Reiciendis perspiciatis tempore quas saepe architecto adipisci nemo quos corrupti fugit officiis.
        </p>
        <p  className='text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nihil totam, facere, sequi dolorem quidem atque, cumque maiores corrupti exercitationem esse doloremque? Possimus eveniet ab nulla obcaecati nihil.
        </p>
    </div>
 </div>
  )
}

export default ProductDescription