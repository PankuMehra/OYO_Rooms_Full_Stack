
import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
    hotelName:{
        type:String,
        require: true
    },
    address:{
        type:String,
        require: true
    },
    distance:{
        type:Number,
        require: true
    },
    city:{
        type:String,
        require: true
    },
    info:{
        type:String,
        require: true
    },
    rating:{
        type:Number,
        require: true
    },
    ratingCount:{
        type:String
    
    },
    ratingStatus:{
        type:String
    
    },
    price:{
        type:Number,
        require:true
    
    },
    strikedPrice:{
        type:Number,
        require:true
    
    },
    discount:{
        type:Number,
        require:true
    
    },
    facility:{
        type:[String]
    
    },
    mainImage:{
        type:String,
        require:true,
    },
    image:{
        type:[String],
        
    },
   
    
})

const Hotels = mongoose.model('hotel', hotelSchema);

export default Hotels;

