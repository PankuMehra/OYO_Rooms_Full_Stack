import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
    data:{
        type:String,
        require: true
    },
    done:{
        type:Boolean,
        default:false,
    },
    type:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.new
    }
})

const hotel = mongoose.model('hotel', hotelSchema);

export default hotel;

