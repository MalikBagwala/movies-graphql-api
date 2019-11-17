import Genre from "./genre.model";

export default {
  ActorType: {
    genres(movie) {
      return movie.genres.map(async g => await Genre.findById(g));
    }
  }
};
