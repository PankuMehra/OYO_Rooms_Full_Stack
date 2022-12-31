import mongoose from "mongoose";

const connection = async () => {
  const USERNAME = process.env.DB_USERNAME
  const PASSWORD = process.env.DB_PASSWORD
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
