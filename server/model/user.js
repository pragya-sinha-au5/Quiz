const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email"
  },
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    isLength: {
      errorMessage: 'Password should be at least 3 chars long',
      // Multiple options would be expressed as an array
      options: { min: 3 }
    }
  },
  
});
const User = mongoose.model("user", userSchema);
module.exports = User;