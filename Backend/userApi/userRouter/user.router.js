const express = require("express");
const userRoute = express.Router();
const Users = require("../userModel/user.model");

userRoute.post("/", async (req, res) => {
  try {
    const createUser = await Users.create({
      name: name,
      email: email,
      password: password,
    });
    res.status(200).send({
      message: "successfull",
    });
  } catch (error) {
    console.log(error);
  }
});
module.exports = userRoute;
