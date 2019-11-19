import User from "../user/user.model";
import Movie from "../movies/movie.model";
import Vote from "./vote.model";

export default {
  Query: {},
  Mutation: {
    async addEditVote(_, { userId, movieId, rating }) {
      const previousVote = await Vote.find({ userId, movieId });
      if (previousVote) {
        return await Vote.findByIdAndUpdate(previousVote.id, { rating });
      } else {
        return await Vote.create({ userId, movieId, rating });
      }
    }
  },
  VoteType: {
    user(parent) {
      return User.findById(parent.userId);
    },
    movie(parent) {
      return Movie.findById(parent.movieId);
    }
  }
};
