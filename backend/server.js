const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(bodyParser.json({limit: "10mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "10mb", extended: true}))
app.use(cors())

app.use('/posts',require('./routes/routerfesPosts'))
app.use('/wposts',require('./routes/routerwildPost'))
app.use('/hposts',require('./routes/routerheriPosts'))

const CONNECTION_URL = 'mongodb+srv://lakmina123:lakmina123@cluster0.ni2cwhy.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_URL)
.then(()=>app.listen(port,()=>console.log(`server is running on port: ${port}`)))
.catch((error) => console.log(error.message))

mongoose.set('strictQuery', true);
