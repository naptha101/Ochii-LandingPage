import { motion } from 'framer-motion'
import React from 'react'

const HomePage = () => {
  
  return (
    <div data-scroll data-scroll-speed="-.3" data-scroll-section  className='w-full h-fit bg-zinc-900 pt-1'>
    <div className='flex flex-col textstructure mt-40 px-20'>
     <div className='masker flex'>
      <h1 className='uppercase text-3xl md:text-7xl font-["NeueMontreal"] leading-[5vw] tracking-tighter font-semibold' >
        WE CREATE
      </h1>
     </div>
     <div className='masker flex item-center'>
        <motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.76,0,0.24,1],duration:1}} className='bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")] bg-cover mt-[2vw] mr-[1vw] w-[8vw] rounded-md h-[5.7vw] -top-[1.2vw] relative'></motion.div>
      <h1 className='uppercase text-3xl md:text-7xl leading-[5vw] tracking-tighter font-semibold' >
        EYE-OPENING
      </h1>
     </div>
     <div className='masker flex'>
      <h1 className='uppercase text-3xl md:text-7xl leading-[5vw] tracking-tighter font-semibold' >
       PRESENTATION
      </h1>
     </div>
    </div>
    <div className='mt-32 border border-t-gray-200 border-t-2 px-4 pt-10 pb-10  w-full flex flex-row justify-between item-center p ' >
{["For public and private companies","From the first pitch to IPO"].map((e,i)=>(
<p className='text-md font-light tracking-tight leading-none w-fit' >{e}</p>

))
}
<div className='start'>
     <div className='px-4 py-2 rounded-3xl border border-gray-300 text-sm' >
        START THE PROJECT
     </div>
</div>
    </div>

    </div>
  )
}

export default HomePage