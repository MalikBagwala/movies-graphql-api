import { Schema, model } from "mongoose";
import { String } from "core-js";

const userSchema = new Schema({
  phoneNumber: {
    type: String,
    unique: [true, "Invalid Phone Number"],
    required: [true, "Phone Number is Required"],
    validate: {
      validator: v => /\d{5}([- ]*)\d{6}/.test(v),
      message: ph => `${ph} is not a valid phone number`
    }
  },
  firstName: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true
  },
  lastName: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: false
  },
  dateOfBirth: {
    type: Date
  }
});

const User = model("User", userSchema);

export default User;
