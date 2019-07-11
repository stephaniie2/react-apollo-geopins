const mongoost = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  picture: String
});

module.exports = mongoose.model("User", UserSchema);
