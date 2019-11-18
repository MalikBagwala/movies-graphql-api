import Actor from "../actor/actor.model";
import Genre from "../genre/genre.model";
export default {
  Query: {
    allMovies(_, { first, skip }) {
      return Movie.find()
        .limit(first)
        .skip(skip);
    },
    movie(_, { id }) {
      return Movie.findById(id);
    }
  },
  Mutation: {
    addEditMovie(_, { movie }) {
      if (movie.id) {
        return Movie.findByIdAndUpdate(movie.id, movie);
      } else {
        return Movie.create(movie);
      }
    },
    async deleteMovie(_, { id }) {
      const deletedMovie = await Movie.findByIdAndRemove(id);
      return deletedMovie;
    }
  },
  MovieType: {
    genres(movie) {
      return movie.genres.map(g => Genre.findById(g));
    },
    actors(movie) {
      return movie.actors.map(a => Actor.findById(a));
    }
  }
};
