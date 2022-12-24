import React from 'react'
import { useSelector } from 'react-redux'

import Post from './post'
 
const Posts = ({setCurrentId}) => {
    const posts = useSelector((state)=> state.posts)
    console.log(posts)
  return (
    <div className='grid lg:grid-cols-5 lg:gap-4 sm:grid-cols-4 sm:gap-4 '>
        {
            posts.map((post)=>(
                <div key={post._id}>
                    <Post post={post} setCurrentId={setCurrentId}/>
                </div>
            ))
        }
    </div>
  )
}

export default Posts