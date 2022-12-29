import express from "express";
import connection from "./databse/db.js";
import cors from 'cors'
// import Routes from "./routes/route.js";
const app = express();
app.use(cors())
app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
// app.use("/" , Routes)
app.get("/" , (req, res)=>{
    res.send("Hello from hotel server")
})
connection();
const PORT = 8000;
app.listen(PORT, ()=>{
    console.log("backend Server listing at http://localhost:8000")
})
