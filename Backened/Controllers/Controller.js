
const multer= require('multer');
const port=300;
const axios = require('axios');
const data_model= require('../Models/data_schema');
const Model_display= require('../Models/display_item_model');
const User_model= require('../Models/user_schema');
const path= require('path');
const bcrypt= require('bcrypt');
const json= require('jsonwebtoken');
const cookieParser= require('cookie-parser');
const new_collection= require('../Models/new_collection');
const storage=multer.diskStorage({
    destination:'./upload/images',
    filename:async function(req,file,cb)
    {
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
})

const upload= multer({storage:storage});

async function Controllers(app)
{
    const url="https://shopiffy-backened-updated.onrender.com";
    app.use(cookieParser());
    
    app.post(`${url}/upload`,upload.single('product'),(req,res)=>{
        res.json({
          sucess:1,
          image_url:`/${req.file.filename}`
      })
  
  })

// Api to add product
  app.post('/addproduct', async (req,res)=>{
       
      
      
       const item=new Model_display({
          id:req.body.id,
          name:req.body.name,
          new_price:req.body.new_price,
          old_price:req.body.old_price,
          category:req.body.category,
          image:req.body.image

       })
         
  
       await  item.save();
       console.log(item);

       res.json({
        sucess:1,
        name:req.body.name
       })
      
  })

  app.post('/new_collection',async (req,res)=>{
    const data=  new new_collection({
        name:req.body.name,
        image:req.body.image,
        new_price:req.body.new_price,
        old_price:req.body.old_price  

    })

    await data.save();

    res.json({
      sucess:1,
      name:req.body.name
     })
     
})

app.get('/new_collection', async (req,res)=>{
      const data= await new_collection.find({});
      res.json({items:data});
})

  

  app.post('/dataproduct',async (req,res)=>{
      const data= new data_model({
          name:req.body.name,
          image:req.body.image,
          new_price:req.body.new_price,
          old_price:req.body.old_price

      })

      await data.save();

      res.json({
        sucess:1,
        name:req.body.name
       })
       
  })

  app.get('/dataproduct',async (req,res)=>{
      const data= await data_model.find({});
      res.json({items:data});
  })

//   Api to Delete a product

 app.post('/deleteProduct',async (req,res)=>{
    console.log(req.body);
     await  Model_display.findByIdAndDelete({_id:req.body.id});
     res.json({
        sucess:1,
        message:"Already Deleted"
     })
 })

//  Api to search Products
 app.get('/listproduct',async (req,res)=>{
      let  items;
    items= await  Model_display.find({});
    
        res.json({items:items});
})

// SignUp Route

app.post('/signup',async (req,res)=>{
     const {email,user_name,password}=req.body;

     if(!email || !password  || user_name==="")
        {
            res.json({sucess:false,error:'All Fields are required'});
        }

      const user=  await User_model.findOne({email:email});

      if(user)
        {
            res.json({sucess:false,error:'Allready Existed user with this mail'});
        }
        else
        {
            let Cart={};
            const recieved= await Model_display.find({});
   
            for(let item of recieved)
            {
                Cart[item._id]=0;
            }
 

            const hash_password= await bcrypt.hash(password,10);
            
            const data=new User_model({
                user_name:user_name,
                email:email,
                password:hash_password,
                cartdata:Cart
                
            })   

            data.save().then((data)=>{
                 res.json({sucess:true,error:'Sucessfull SignedUp',data:data});
                 console.log(data);

            })
  
            





        }


})
    

// Finder data/serearcher
app.post("/finder",async (req,res)=>{
    const data= await Model_display.findOne({_id:req.body._id});
    console.log("inside finder",req.body);
    res.json({fetched:data});
})


// Login Function

app.post('/login',async (req,res)=>{
     const {email,password}= req.body;
 
     if(!email || !password)
        {
            res.json({sucess:false,error:'Both are Required'});
        } 

      const user= await User_model.findOne({email:email});
      if(!user)
        {
             res.json({sucess:false,error:'No User Exist'});
        }
        else
        { 
             bcrypt.compare(password,user.password, function(err,data)
            {
                  if(err)
                {
                    res.json({error:err});
                }
                else if(data)
                {
                     
                     const token=json.sign({
                        email:user.email,
                        user_name:user.user_name

                     },'E-commerse');
                    //  res.json({error:'Login Sucessfully',token:token});
                     res.json({error:'Logned in Sucessfully',token:token,sucess:true});
                    
                    
                }
                else
                {
                    res.json({error:'Password Did not Matched'})

                }
        })
        }
      
})

// middleware to fetch user
 const fetcher_user= async (req,res,next)=>{
      const token=req.body.token;
     
      if(!token)
        {
           res.json({error:"Login First",sucess:false});
        }
        else  
        {
           const data= await  json.verify(token,'E-commerse');
           req.body.user=data;
           
          return  next();

        }
 }

//  Add to cart or Update to cart
app.post('/add_cart',fetcher_user,async (req,res)=>{
    const {user,object_id}= req.body;
    
    const data= await User_model.findOne({email:user.email});
    console.log("obect_id",object_id);
     console.log("data",data);
    data.cartdata[object_id]=data.cartdata[object_id]+1;
    await User_model.findOneAndUpdate({email:data.email},{cartdata:data.cartdata});
    res.json({user:data,sucess:true});
         
})

// Get Cart

app.post("/get_cart",fetcher_user,async(req,res)=>{
     const {user}=req.body;
     const user_data= await User_model.findOne({email:user.email});
     console.log("user_data",user_data);
     res.json({user:user_data});
})

//Remove from cart

app.post("/remove_cart",fetcher_user,async (req,res)=>{
      const {user}=req.body;
      const data=await User_model.findOne({email:user.email});
      data.cartdata[req.body.item_id]=data.cartdata[req.body.item_id]-1;
      await User_model.findByIdAndUpdate({_id:data._id},{cartdata:data.cartdata});

})


}


module.exports=Controllers; 