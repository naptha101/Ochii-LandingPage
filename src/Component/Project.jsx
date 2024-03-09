import { motion } from 'framer-motion'
import { Power4 } from 'gsap';
import React, { useState } from 'react'

const Project = () => {
    const [isHovering, setHovering] = useState(false);
    const [isHovering2, setHovering2] = useState(false);
    const [isHovering3, setHovering3] = useState(false);
    const [isHovering4, setHovering4] = useState(false);
    return (
        <div className='w-full py-20 bg-black'>
            <div className='w-full  py-20 border-t-2 border-gray-400'></div>
            <div className='px-20 flex flex-col gap-10'>
                <div className='cards flex gap-10 mt-10'>
                    <div 
                        onMouseEnter={() => setHovering(true)} 
                        onMouseLeave={() => setHovering(false)} 
                        className='relative w-1/2 h-[70vh]'
                    >
                        <h1 className='absolute z-[9] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-4xl text-center'>
                            <h1 className='flex absolute overflow-hidden right-full translate-x-1/2 translate-y-1/3'>
                                {'FYDE'.split('').map((e, i) => (
                                    <motion.span 
                                        animate={isHovering ? { y: "0" } : { y: "100%" }} 
                                        transition={{ ease: Power4.easeInOut, delay: i * 0.05 }} 
                                        className='inline-block text-[#CDEA68] font-bold text-6xl' 
                                        initial={{ y: "0" }}
                                        key={i}
                                    >
                                        {e}
                                    </motion.span>
                                ))}
                            </h1>
                        </h1>
                        <div className='group  w-full h-full rounded-xl overflow-hidden '>
                            <img className='group-hover:scale-110 duration-100 w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png' alt='FYDE'></img>
                        </div>
                    </div>
                    <div className='w-1/2 h-[70vh] relative'  onMouseEnter={() => setHovering2(true)} 
                        onMouseLeave={() => setHovering2(false)} >
                    <h1 className='absolute z-[9] right-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-4xl text-center'>
                            <h1 className='flex absolute overflow-hidden right-full translate-x-1/2 translate-y-1/3'>
                                {'VISE'.split('').map((e, i) => (
                                    <motion.span 
                                        animate={isHovering2 ? { y: "0" } : { y: "100%" }} 
                                        transition={{ ease: Power4.easeInOut, delay: i * 0.05 }} 
                                        className='inline-block text-6xl font-bold text-[#CDEA68]' 
                                        initial={{ y: "0" }}
                                        key={i}
                                    >
                                        {e}
                                    </motion.span>
                                ))}
                            </h1>
                        </h1>
                        <div className='w-full h-full group  rounded-xl overflow-hidden '>
                            <img className='group-hover:scale-110 duration-100 w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg' alt='VISE'></img>
                        </div>
                    </div>
                </div>
                <div className='cards flex gap-10 mt-10'>
                    <div 
                        onMouseEnter={() => setHovering3(true)} 
                        onMouseLeave={() => setHovering3(false)} 
                        className='relative w-1/2 h-[70vh]'
                    >
                        <h1 className='absolute z-[9] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-4xl text-center'>
                            <h1 className='flex absolute overflow-hidden right-full translate-x-1/2 translate-y-1/3'>
                                {'TRAWA'.split('').map((e, i) => (
                                    <motion.span 
                                        animate={isHovering3 ? { y: "0" } : { y: "100%" }} 
                                        transition={{ ease: Power4.easeInOut, delay: i * 0.05 }} 
                                        className='inline-block text-[#CDEA68] font-bold text-6xl' 
                                        initial={{ y: "0" }}
                                        key={i}
                                    >
                                        {e}
                                    </motion.span>
                                ))}
                            </h1>
                        </h1>
                        <div className='group  w-full h-full rounded-xl overflow-hidden '>
                            <img className='group-hover:scale-110 duration-100 w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg' alt='FYDE'></img>
                        </div>
                    </div>
                    <div className='w-1/2 h-[70vh] relative'  onMouseEnter={() => setHovering4(true)} 
                        onMouseLeave={() => setHovering4(false)} >
                    <h1 className='absolute z-[9] right-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-4xl text-center'>
                            <h1 className='flex absolute overflow-hidden right-full translate-x-1/2 translate-y-1/3'>
                                {'PREMIUM BLEND'.split('').map((e, i) => (
                                    <motion.span 
                                        animate={isHovering4 ? { y: "0" } : { y: "100%" }} 
                                        transition={{ ease: Power4.easeInOut, delay: i * 0.05 }} 
                                        className='inline-block text-6xl font-bold text-[#CDEA68]' 
                                        initial={{ y: "0" }}
                                        key={i}
                                    >
                                        {e}
                                    </motion.span>
                                ))}
                            </h1>
                        </h1>
                        <div className='w-full h-full group  rounded-xl overflow-hidden '>
                            <img className='group-hover:scale-110 duration-100 w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png' alt='VISE'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
