import express from "express";
import {addHotel,getHotel} from '../Controller/HotelController.js'
const route = express.Router();


route.get("/" , (req, res)=>{
    res.send("Welcome to hotel api")
})
route.post("/addhotel" ,addHotel)
route.get("/gethotels" ,getHotel)


export default route;
