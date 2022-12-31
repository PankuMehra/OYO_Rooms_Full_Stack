import express from "express";
import {addHotel,getHotel,getHotelById,getHotelByQuery} from '../Controller/HotelController.js'
const route = express.Router();


route.get("/" , (req, res)=>{
    res.send("Welcome to hotel api")
})
route.post("/addhotel" ,addHotel)
route.get("/gethotels" ,getHotel)
route.get("/gethotel/:id" ,getHotelById)
// route.get("/gethotels/:query" ,getHotelByQuery)


export default route;
