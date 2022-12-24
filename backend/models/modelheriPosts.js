const mongoose = require('mongoose')

const posthSchema = mongoose.Schema({
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

const PosthMessage = mongoose.model('postheritageMessage',posthSchema)

module.exports = PosthMessage