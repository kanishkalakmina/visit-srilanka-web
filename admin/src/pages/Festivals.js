import Formfes from '../component/form/formFes'
import Posts from '../component/post/posts'
import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { getPosts } from '../actions/posts'

 
function Festivals() {
  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getPosts())
  },[dispatch])

return (
  <div>
    <Formfes currentId={currentId} setCurrentId={setCurrentId}/>
    <Posts setCurrentId={setCurrentId}/>
  </div>
)
}

export default Festivals