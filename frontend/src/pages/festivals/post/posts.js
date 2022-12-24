import React from 'react'
import { useSelector } from 'react-redux'

import Post from './post'
 
const Posts = () => {
    const posts = useSelector((state)=> state.posts)
    console.log(posts)
  return (
    <div className='grid lg:grid-cols-3 lg:gap-4 sm:grid-cols-2 sm:gap-4 '>
        {
            posts.map((post)=>(
                <div key={post._id}>
                    <Post post={post}/>
                </div>
            ))
        }
    </div>
  )
}

export default Posts