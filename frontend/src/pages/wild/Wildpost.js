import React from 'react'
import WPosts from './wpost/wposts'
import '../festivals/Fes.css'



const Wild = ()=> {
  return (
    <div className='fes'>
 <div className='mx-auto px-4 py-16  text-black text-center w-full'>
        <div>
            <h1 class="mb-4 mt-10 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-orange-500">Wild</span> </h1>
          
        </div>
        <hr class="my-4 mx-auto w-70 h-[1px]  rounded border-0 md:my-10 bg-gradient-to-r to-emerald-600 from-orange-500"></hr>
    <WPosts/>    
       

    </div>
    </div>
   
  )
}

export default Wild
