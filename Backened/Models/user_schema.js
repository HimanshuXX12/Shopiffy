const mongoose= require('mongoose');


const schema=  new mongoose.Schema({
    user_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cartdata:{
        type:Object,
         default:true
    },
    date:
    {
        type:Date,
        default:Date.now
    }
   

}
)


const Model= mongoose.model('User_model',schema);


module.exports=Model;