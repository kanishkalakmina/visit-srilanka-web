const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    selectedFile: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
})

const PostMessage = mongoose.model('postMessage',postSchema)

module.exports = PostMessage