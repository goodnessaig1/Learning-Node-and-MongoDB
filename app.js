const express = require('express')

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config')

app.use(bodyParser.json());

//  Import Routes
const postRoute = require('./Routes/posts'); 

app.use('/post', postRoute);

//  MiddleWares
// app.use('/post', () => {
//     console.log('This is a middleware running')
// })

//   ROUTES
app.get('/', (req, res) => {
    // patch is for updating, delete is for deleting, post is for submiting, get is for collecting information, post is to give the infor=rmatiom
    res.send('We are on home');
})


//  HOW DO WE START LISTENING TO THE SERVER

app.listen(3000);

//  connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => console.log('connected to DB'));