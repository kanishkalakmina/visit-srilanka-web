import FormWild from '../component/wild/form/formWild'
import Posts from '../component/wild/post/posts'
import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { getwPosts } from '../actions/posts'

function Wild() {
  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getwPosts())
  },[dispatch])

return (
  <div>
    <FormWild currentId={currentId} setCurrentId={setCurrentId}/>
    <Posts setCurrentId={setCurrentId}/>
  </div>
)

}

export default Wild