import Actor from "../actor/actor.model";
import Genre from "../genre/genre.model";
export default {
  MovieType: {
    genres(movie) {
      return movie.genres.map(g => Genre.findById(g));
    },
    actors(movie) {
      return movie.actors.map(a => Actor.findById(a));
    }
  }
};
