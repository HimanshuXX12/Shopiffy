
const mongoose= require('mongoose');

const schema= mongoose.Schema({
    id:{
       type:Number,
       
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    new_price:{
        type:Number,
        required:true
    },
    old_price:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    available:{
        type:Boolean,
        default:true

    },

})


const Model= mongoose.model('data',schema);

module.exports=Model;