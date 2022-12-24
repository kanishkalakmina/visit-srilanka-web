const express = require('express')
const {getPost, createPost, updatePost, deletePost} = require('../controllers/controllheriPosts')

const router = express.Router();

router.get('/',getPost)

router.post('/',createPost)

router.patch('/:id',updatePost)

router.delete('/:id',deletePost)

module.exports = router 