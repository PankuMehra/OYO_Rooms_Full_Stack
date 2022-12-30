const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
    min: 6,
  },
  email: {
    type: String,
  },
  hotelBooked: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "bookedHotel",
  },
});

const Users = mongoose.model("users", userSchema);
module.exports = Users;
