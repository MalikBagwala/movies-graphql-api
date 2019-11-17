import mongoose from "mongoose";

const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true
  }
});

const Genre = mongoose.model("Genre", genreSchema);

export default Genre;
