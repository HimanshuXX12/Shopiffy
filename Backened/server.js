const express= require('express');
const app= express();
app.use((req,res,next)=>{
     res.header('Access-Control-Allow-Origin', 'http://localhost:3000/','https://himanshu-shopify-app.netlify.app'); // Allow requests from any origin
     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
     next();
})

const env=require('dotenv').config();
const cookieParser=require('cookie-parser');
app.use(express.json());
const path= require('path');
const multer=require('multer');
const cors= require('cors');
app.use(cors());
const port=300;
const body=require('body-parser');
app.use(cookieParser());

app.use(express.static(path.join(__dirname,'/upload/images')));


app.use(express.urlencoded({extended:true}));

const mongoose= require('mongoose');
 

// const db_link=process.env.URL;
const db_link="mongodb+srv://himanshuee2001admern-ecommerse:L7Xd70J9vzpY3HVj@cluster0.jhrbkzx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const Controllers= require('./Controllers/Controller');
Controllers(app);

mongoose.connect(db_link).then(()=>{
     console.log('Database is connected');
})





// Creating Upload Endpoint for Upload Images





app.listen(port,()=>{
     console.log('Server is running at ',port);
})