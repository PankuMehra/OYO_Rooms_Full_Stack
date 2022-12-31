import express from "express";
import connection from "./config/db.js";
import mongoose from "mongoose";

const port = process.env.PORT || 5050;
mongoose.set("strictQuery", false);
import cors from "cors";
import { Login} from "./controller/userController.js";
import { Signup } from "./controller/userController.js";

const app = express();
app.use(express.json());
app.use(cors());
app.post("/signup", Signup);
app.post("/login", Login);
app.listen(port, () => {
  try {
    console.log("Listening on Port");
    connection();
  } catch (e) {
    console.log(e);
  }
});