import React, { useState } from 'react';

const About = () => {
  const [isHovering, setHovering] = useState(false);

  const circleStyle = {
    height: ' 10px',
    width: '10px',
    borderRadius: '50%',
    backgroundColor: 'white',
    transition: 'transform 0.3s ease',
    transform: isHovering ? 'scale(3)' : 'scale(0.5)'
  };

  return (
    <div data-scroll data-scroll-speed="-0.1" className='bg-[#CDEA68] px-8 rounded-tl-3xl h-[120%] rounded-tr-3xl w-full '>
      <h1 className='text-[4vw] text-black leading-[4.5vw] tracking-tight '>Ochi is a strategic partner for fast-growing tech business that need to raise funds, sell products, explains complex ideas, and hire great people.</h1>
      <div className='border-[#616d39] py-6 px-8 border-t-[1px] mt-20 flex w-full'>
        <div className='w-full flex justify-between'>
          <div>
            <h1 className='group text-7xl' >Our Approach</h1>
            <button 
              className='group py-6 mt-[10vh] px-10 flex gap-4 justify-between text-sm uppercase items-center  bg-zinc-900 text-white rounded-full '
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <h1 className='font-bold'>Read more</h1>
              <div style={circleStyle}  ></div>
            </button>
          </div>
          <div className='bg-green-500 w-[35vw] h-[50vh] rounded-xl'></div>
        </div>
      </div>
    </div>
  );
}

export default About;
