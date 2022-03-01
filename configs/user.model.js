
const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: { type: String, required: false },
    
    password:{
      type: String, required: true
    },
    mobile_number: { type: Number, required: false, length: 10 }
  },
  {
    versionKey: false,
    timestamps: true,
    
  }
);



module.exports = model("user", userSchema); // users