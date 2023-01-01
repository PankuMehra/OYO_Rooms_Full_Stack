import mongoose from "mongoose";

const connection = async () => {
  try {
    mongoose.connect(
      // "mongodb+srv://furkan123:furkan123@dominosauth.i1suxc3.mongodb.net/dominosAuth?retryWrites=true&w=majority",
      "mongodb+srv://deepakvats123:deepakvats123@oyouserdata.rg945xs.mongodb.net/OyoUserData?retryWrites=true&w=majority",
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
