const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express();

app.set('view engine','ejs')
app.set('views','./src/view')

mongoose.connect('mongodb://127.0.0.1:27017/testmongo').then(() =>{
    console.log('MongoDB Connected!')
}).catch((err) =>{
    console.error('Failed to connect MongoDB',err)
})

app.listen(3000, () =>{
    console.log(`server is on port 3000`)
})