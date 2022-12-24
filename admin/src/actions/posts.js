import * as api from '../api'

//Actions creators

//festivals
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

export const updatePost = (id,post) => async (dispatch)=>{
    try {
        const {data} = await api.updatePost(id,post)
        dispatch({type: 'UPDATE',payload:data})

    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id) => async(dispatch)=>{
    try {
        await api.deletePost(id)
        dispatch({type:'DELETE', payload:id})
    } catch (error) {
        console.log(error)
    }
}

// wild
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

    export const updatewPost = (id,wpost) => async (dispatch)=>{
        try {
            const {data} = await api.updatewildPost(id,wpost)
            dispatch({type: 'UPDATE_W',payload:data})
    
        } catch (error) {
            console.log(error)
        }
    }
    
    export const deletewPost = (id) => async(dispatch)=>{
        try {
            await api.deletewildPost(id)
            dispatch({type:'DELETE_W', payload:id})
        } catch (error) {
            console.log(error)
        }
    }