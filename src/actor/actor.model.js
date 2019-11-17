import mongoose from "mongoose";

const actorSchema = new mongoose.Schema({
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
    required: true
  },
  age: {
    type: Number,
    min: 6,
    max: 120
  }
});

const Actor = mongoose.model("Actor", actorSchema);

export default Actor;
