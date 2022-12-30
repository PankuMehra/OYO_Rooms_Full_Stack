// import express from "express";
// import connection from "./database/db.js";
// import cors from "cors";
// import Routes from "./Routes/hotelRoutes.js";
// const app = express();
// app.use(cors());
// app.use(express.json({ extended: true }));
// app.use(express.urlencoded({ extended: true }));
// app.use("/", Routes);

// connection();
// const PORT = 8000;
// app.listen(PORT, () => {
//   console.log("backend Server listing at http://localhost:8000");
// });

const express = require("express");
const app = express();
const dbConnect = require("./database/db");
app.use(express.json());

app.use("/", userRouter);

dbConnect()
  .then(() => {
    app.listen(3008, () => {
      console.log("connected to database");
    });
  })
  .catch((err) => {
    console.log(err);
  });
