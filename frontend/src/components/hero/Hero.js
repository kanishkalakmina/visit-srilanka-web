import React from 'react'

import srilanka from '../../videos/Hike.mp4'
function Hero() {
  return (
    <div className='w-full h-[100vh] '>
        <video className='object-cover h-full w-full absolute -z-10' src={srilanka} autoPlay loop muted />
        <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
       
            &nbsp;
           
            &nbsp;
            &nbsp;
            &nbsp;&nbsp;
            &nbsp;
            &nbsp;&nbsp;
            &nbsp;
            &nbsp;
            <div>
            
            </div>
        </div>
        
    </div>
  )
}

export default Hero