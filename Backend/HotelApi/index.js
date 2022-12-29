import express from "express";
import connection from "./database/db.js";
import cors from 'cors'
import Routes from "./Routes/hotelRoutes.js";
const app = express();
app.use(cors())
app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
app.use("/" , Routes)

connection();
const PORT = 8000;
app.listen(PORT, ()=>{
    console.log("backend Server listing at http://localhost:8000")
})

