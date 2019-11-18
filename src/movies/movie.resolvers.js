import Genre from "../genre/genre.model";
import Actor from "../actor/actor.model";
import { set } from "lodash";
export default {
  MovieType: {
    genres(movie) {
      return movie.genres.map(async g => await Genre.findById(g));
    },
    actors(movie) {
      return movie.actors.map(async a => {
        const actor = await Actor.findById(a);
        set(actor, "fullName", `${actor.firstName} ${actor.lastName}`);
        return actor;
      });
    }
  }
};
