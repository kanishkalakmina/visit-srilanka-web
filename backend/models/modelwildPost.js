const mongoose = require('mongoose')

const postwSchema = mongoose.Schema({
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

const PostwMessage = mongoose.model('postwildMessage',postwSchema)

module.exports = PostwMessage