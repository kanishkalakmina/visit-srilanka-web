import axios from 'axios'

const url = 'http://localhost:5000/posts'

export const fetchPosts = () => axios.get(url) 
export const createPost = (newPost) => axios.post(url,newPost)
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`,updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`)

const wildurl = 'http://localhost:5000/wposts'

export const fetchwildPosts = () => axios.get(wildurl) 
export const createwildPost = (newWPost) => axios.post(wildurl,newWPost)
export const updatewildPost = (id, updatedPost) => axios.patch(`${wildurl}/${id}`,updatedPost);
export const deletewildPost = (id) => axios.delete(`${wildurl}/${id}`)