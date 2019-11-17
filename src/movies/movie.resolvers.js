import Genre from "../genre/genre.model";
import Actor from "../actor/actor.model";

export default {
  MovieType: {
    genres(movie) {
      return movie.genres.map(async g => await Genre.findById(g));
    },
    actors(movie) {
      return movie.actors.map(async a => await Actor.findById(a));
    }
  }
};
