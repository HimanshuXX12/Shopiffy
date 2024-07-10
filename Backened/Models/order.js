const mongoose= require("mongoose");


const schema= mongoose.Schema({
    user_email:String,
    Address:String,
    status:String,
    Mode:{
        type:String,
        default:"cash"
    },
    Price:Number,
    Quantity:Number,
    Mobile:Number,
    items:Object,
    full_name:String,
    Pincode:Number,
    Country:String,
   

},{timestamps:true});


const Model= mongoose.model("order",schema);

module.exports= Model;