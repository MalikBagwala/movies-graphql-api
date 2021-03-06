import { Schema, model } from "mongoose";

const movieSchema = new Schema({
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
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 10
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

const Movie = model("Movie", movieSchema);

export default Movie;
