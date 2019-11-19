import { Schema, model } from "mongoose";

const voteSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  movieId: {
    type: Schema.Types.ObjectId,
    ref: "Movie"
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
    default: 0
  }
});
// Ensures that one user can only vote once for a movie
const Vote = model("Vote", voteSchema);
Vote.ensureIndexes({ userId: 1, movieId: 1 });

export default Vote;
