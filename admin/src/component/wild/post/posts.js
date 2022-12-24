import React from 'react'
import { useSelector } from 'react-redux'

import Post from './post'
 
const Posts = ({setCurrentId}) => {
    const wposts = useSelector((state)=> state.wposts)
    console.log(wposts)
  return (
    <div className='grid lg:grid-cols-5 lg:gap-4 sm:grid-cols-4 sm:gap-4 '>
        {
            wposts.map((wpost)=>(
                <div key={wpost._id}>
                    <Post wpost={wpost} setCurrentId={setCurrentId}/>
                </div>
            ))
        }
    </div>
  )
}

export default Posts