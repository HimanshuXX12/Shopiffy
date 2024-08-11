const express= require('express');
const app= express();
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
const Controllers= require('./Controllers/Controller');
app.use(express.static(path.join(__dirname,'/upload/images')));


app.use(express.urlencoded({extended:true}));
Controllers(app);
const mongoose= require('mongoose');
 

const db_link=process.env.URL;
app.use((req,res,next)=>{
     res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
})

mongoose.connect(db_link).then(()=>{
     console.log('Database is connected');
})





// Creating Upload Endpoint for Upload Images





app.listen(port,()=>{
     console.log('Server is running at ',port);
})