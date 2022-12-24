import React from 'react'
 
const WPost =({wpost})=> { 
  
  return (
    <div className=''>
<div class="py-4">
  <div class="px-4">
    <div class="block md:flex justify-between md:-mx-2">
      <div class="w-full lg:w-[400px] md:mx-2 mb-4 md:mb-0">
        <div class="bg-gradient-to-r to-white-700 from-white-700  rounded-lg overflow-hidden shadow ">
          <img class="h-56 w-full object-cover object-center" src={wpost.selectedFile} alt=""/>
          <div class="p-4 h-auto md:h-40 lg:h-48 sm:h-60 bg-gray-300">
            <div class="uppercase block text-orange-500 hover:text-green-600 font-bold mb-2 text-lg md:text-base lg:text-lg">
              {wpost.title}
            </div>
            <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm font-bold">
              {wpost.message}
            </div>
            
          </div>
        </div>
      </div>
     
      
    </div>
  </div>
</div>
</div>
  )
}

export default WPost
