import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD
const connection = async () => {
  
  
  try {
    mongoose.connect(
      
      `mongodb+srv://${USERNAME}:${PASSWORD}@oyouserdata.rg945xs.mongodb.net/OyoUserData?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("DB CONNECTION ESTABLISHED");
  } catch (err) {
    console.log(err);
  }
};

export default connection;
