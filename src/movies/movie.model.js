import mongoose, { Schema } from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true
  },
  year: {
    type: Number,
    min: 1800,
    max: new Date().getFullYear()
  },
  genres: [
    {
      type: Schema.Types.ObjectId,
      ref: "Genre"
    }
  ],
  actors: [
    {
      type: Schema.Types.ObjectId,
      ref: "Actor"
    }
  ]
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
