
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
    category:{
        type:String,
        required:true
    },
    special_category:{
        type:String,
        default:null
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


const Model= mongoose.model('display_item',schema);

module.exports=Model;