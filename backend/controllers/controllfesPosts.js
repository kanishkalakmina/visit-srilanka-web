const { default: mongoose } = require('mongoose')
const PostMessage = require('../models/modelfesPosts')

 const getPost = async (req,res)=>{
    try {
        const postMessage = await PostMessage.find()
       
        res.status(200).json(postMessage)

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
 const createPost = async (req,res)=> {
    
    const newPost = new PostMessage(req.body)
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

    const updatedPost = await PostMessage.findByIdAndUpdate(_id,post,{new: true})
    res.json(updatedPost)
}

const deletePost = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send('No post with that id')

        await PostMessage.findByIdAndRemove(id)

        res.json({message:'Post Deleted'})
}

module.exports = {getPost,createPost,updatePost,deletePost}