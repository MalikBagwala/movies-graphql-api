import { gql } from "apollo-server";
import { makeExecutableSchema } from "graphql-tools";
import { merge } from "lodash";
import Actor from "./actor/actor.model";
import actorTypes from "./actor/actor.types";
import Genre from "./genre/genre.model";
import genreTypes from "./genre/genre.types";
import Movie from "./movies/movie.model";
import movieResolvers from "./movies/movie.resolvers";
import movieTypes from "./movies/movie.types";

const Query = gql`
  type Query {
    allActors(search: String, first: Int, skip: Int): [ActorType]
    allMovies(search: String, first: Int, skip: Int): [MovieType]
    allGenres(search: String, first: Int, skip: Int): [GenreType]
    genre(id: String): GenreType
    movie(id: String): MovieType
    actor(id: String): ActorType
  }
  type Mutation {
    addEditActor(actor: ActorInput): ActorType
    addEditMovie(movie: MovieInput): MovieType
    addEditGenre(id: String, name: String!): GenreType
    deleteGenre(id: String): GenreType
    deleteMovie(id: String): MovieType
    deleteActor(id: String): ActorType
  }
`;

const resolvers = {
  Query: {
    allGenres(_, { first, skip }) {
      return Genre.find()
        .limit(first)
        .skip(skip);
    },
    allActors() {
      return Actor.find();
    },
    allMovies(_, { first, skip }) {
      return Movie.find()
        .limit(first)
        .skip(skip);
    },
    movie(_, { id }) {
      return Movie.findById(id);
    },
    genre(_, { id }) {
      return Genre.findById(id);
    },
    actor(_, { id }) {
      return Actor.findById(id);
    }
  },
  Mutation: {
    addEditActor(_, { actor }) {
      if (actor.id) {
        return Actor.findByIdAndUpdate(id, actor);
      } else {
        return Actor.create(actor);
      }
    },
    addEditGenre(_, { id, name }) {
      if (id) {
        return Genre.findByIdAndUpdate(id, { name });
      } else {
        return Genre.create({ name });
      }
    },
    addEditMovie(_, { movie }) {
      if (movie.id) {
        return Movie.findByIdAndUpdate(movie.id, movie);
      } else {
        return Movie.create(movie);
      }
    },
    async deleteGenre(_, { id }) {
      const deletedGenre = await Genre.findByIdAndRemove(id);
      return deletedGenre;
    },
    async deleteActor(_, { id }) {
      const deletedActor = await Actor.findByIdAndRemove(id);
      return deletedActor;
    },
    async deleteMovie(_, { id }) {
      const deletedMovie = await Movie.findByIdAndRemove(id);
      return deletedMovie;
    }
  }
};
export default makeExecutableSchema({
  typeDefs: [Query, genreTypes, movieTypes, actorTypes],
  resolvers: merge(resolvers, movieResolvers)
});
