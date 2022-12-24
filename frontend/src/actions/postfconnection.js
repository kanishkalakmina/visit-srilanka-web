import * as api from '../api/postfconnection'

//Actions creators

// festivals
export const getPosts = () => async(dispatch) =>{

try {
    const {data} = await api.fetchPosts()
    dispatch ({type: 'FETCH_ALL',payload: data})
} catch (error) {
    console.log(error.meggage)
}
  
}

export const createPost = (post) => async(dispatch)=>{
    try {
        const {data} = await api.createPost(post)
        dispatch({type:'CREATE',payload:data})
    } catch (error) {
        console.log(error)
    }
}

//wild
export const getwPosts = () => async(dispatch) =>{

    try {
        const {data} = await api.fetchwildPosts()
        dispatch ({type: 'FETCH_W_ALL',payload: data})
    } catch (error) {
        console.log(error.meggage)
    }
      
    }

    export const createwPost = (wpost) => async(dispatch)=>{
        try {
            const {data} = await api.createwildPost(wpost)
            dispatch({type:'CREATE_W',payload:data})
        } catch (error) {
            console.log(error)
        }
    }