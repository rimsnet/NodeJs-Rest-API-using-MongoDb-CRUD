const express = require('express');
const app     = express();
const dotenv  = require('dotenv');
const mongoose = require('mongoose');
const cors     = require('cors');

dotenv.config();

//Middlewares
app.use(cors());
app.use(express.json());

//import Route
const postRoute = require('./routes/posts');
app.use('/posts', postRoute);


//connect to DB 
mongoose.connect(process.env.MONGO_DB,  {  useUnifiedTopology: true, useNewUrlParser: true }, ()=>{
    console.log('connected to DB');
});


app.listen(3000);