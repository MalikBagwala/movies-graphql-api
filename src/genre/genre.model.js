import { Schema, model } from "mongoose";

const genreSchema = new Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true
  }
});

const Genre = model("Genre", genreSchema);

export default Genre;
