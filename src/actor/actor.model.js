import { Schema, model } from "mongoose";

const actorSchema = new Schema({
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

const Actor = model("Actor", actorSchema);

export default Actor;
