const PosthMessage = require('../models/modelheriPosts')

 const getPost = async (req,res)=>{
    try {
        const postMessage = await PosthMessage.find()
       
        res.status(200).json(postMessage)

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
 const createPost = async (req,res)=> {
    
    const newPost = new PosthMessage(req.body)
    try { 
       
       const savePost = await newPost.save()
        res.status(201).json(savePost)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
} 

const updatePost = async (req,res) =>{
    const {id: _id} = req.params
    const post = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) 
        return res.status(404).send('No post with that id')

    const updatedPost = await PosthMessage.findByIdAndUpdate(_id,post,{new: true})
    res.json(updatedPost)
}

const deletePost = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send('No post with that id')

        await PosthMessage.findByIdAndRemove(id)

        res.json({message:'Post Deleted'})
}

module.exports = {getPost,createPost,updatePost,deletePost}