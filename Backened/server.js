const express= require('express');
const app= express();
const env=require('dotenv').config();
const cookieParser=require('cookie-parser');
app.use(express.json());
const path= require('path');
const multer=require('multer');
const cors= require('cors');
app.use(cors());
const port=process.env.PORT||300
const body=require('body-parser');
app.use(cookieParser());
const Controllers= require('./Controllers/Controller');
app.use(express.static(path.join(__dirname,'/upload/images')));


app.use(express.urlencoded({extended:true}));
Controllers(app);
const mongoose= require('mongoose');
 

const db_link=process.env.PORT;




mongoose.connect(db_link).then(()=>{
     console.log('Database is connected');
})





// Creating Upload Endpoint for Upload Images





app.listen(port,()=>{
     console.log('Server is running at ',port);
})