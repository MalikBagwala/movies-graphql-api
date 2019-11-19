import { Schema, model } from "mongoose";

const userSchema = new Schema({
  phoneNumber: {
    type: String,
    unique: [true, "Invalid Phone Number"],
    index: true,
    sparse: true,
    validate: {
      validator: v => /\d{5}([- ]*)\d{6}/.test(v),
      message: ph => `${ph} is not a valid phone number`
    }
  },
  username: {
    type: String,
    minlength: 2,
    maxlength: 30,
    unique: [true, "Invalid Username"],
    index: true,
    sparse: true
  },
  password: {
    type: String,
    select: false
  },
  firstName: {
    type: String,
    minlength: 2,
    maxlength: 30
  },
  lastName: {
    type: String,
    minlength: 2,
    maxlength: 30
  },
  dateOfBirth: {
    type: Date
  }
});

const User = model("User", userSchema);

export default User;
