import axios from 'axios'

const url = 'http://localhost:5000/posts'

export const fetchPosts = () => axios.get(url) 
export const createPost = (newPost) => axios.post(url,newPost)

const wildurl = 'http://localhost:5000/wposts'

export const fetchwildPosts = () => axios.get(wildurl) 
export const createwildPost = (newWPost) => axios.post(wildurl,newWPost)