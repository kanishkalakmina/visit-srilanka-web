import React from 'react'
import { useSelector } from 'react-redux'

import WPost from './wpost'
 
const WPosts = () => {
    const wposts = useSelector((state)=> state.wposts)
    console.log(wposts) 
  return (
    <div class ='grid lg:grid-cols-3 lg:gap-4 sm:grid-cols-2 sm:gap-4 '>
        {
            wposts.map((wpost)=>(
                <div key={wpost._id}>
                    <WPost wpost={wpost}/>
                </div>
            ))
        }
    </div>
  )
}

export default WPosts