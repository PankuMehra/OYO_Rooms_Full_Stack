
import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({

    id:{
        type:Number,
        require: true
    },
    hotelName:{
        type:String,
        require: true
    },
    address:{
        type:String,
        require: true
    },
    distance:{
        type:String
       
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
        type:String,
        require: true
    },
    ratingCount:{
        type:String
    
    },
    ratingStatus:{
        type:String
    
    },
    price:{
        type:String,
        require:true
    
    },
    strikedPrice:{
        type:String,
        require:true
    
    },
    discount:{
        type:String,
        require:true
    
    },
    facility1:{
        type:String
    
    },
    facility2:{
        type:String
    
    },
    facility3:{
        type:String
    
    },
    facilityX:{
        type:String
    
    },
    mainImage:{
        type:String,
        require:true,
    },
    image1:{
        type:String,
        
    },
    image2:{
        type:String,
        
    },
    image3:{
        type:String,
        
    },
    image4:{
        type:String,
        
    },
    image5:{
        type:String,
        
    },
   
    
})

const Hotels = mongoose.model('hotel', hotelSchema);

export default Hotels;

