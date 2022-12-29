import mongoose  from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

 const connection=()=>{
    const MONGODB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@mern-todo.nc0lbxi.mongodb.net/?retryWrites=true&w=majority`
    mongoose.connect(MONGODB_URL, {useNewUrlParser:true});

    mongoose.connection.on("connected", ()=>{
        console.log("Database Connected")
    })
    
    mongoose.connection.on("disconnected", ()=>{
        console.log("Database Dis-Connected")
    })

    mongoose.connection.on("error", (error)=>{
        console.log(`Database Dis-Connected with error`, error.messages)
    })

}

export default connection;