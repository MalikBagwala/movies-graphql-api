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
    allActors: [ActorType]
    allMovies: [MovieType]
    allGenres: [GenreType]
    genre(id: String): GenreType
    movie(id: String): MovieType
    actor(id: String): ActorType
  }
  type Mutation {
    addEditActor(actor: ActorInput): ActorType
    addEditMovie(movie: MovieInput): MovieType
    addEditGenre(id: String, name: String!): GenreType
    deleteGenre(id: String): GenreType
  }
`;

const resolvers = {
  Query: {
    allGenres() {
      return Genre.find();
    },
    allActors() {
      return Actor.find();
    },
    allMovies() {
      return Movie.find();
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
    deleteGenre(_, { id }) {
      if (id) Genre.findByIdAndDelete(id);
    }
  }
};
export default makeExecutableSchema({
  typeDefs: [Query, genreTypes, movieTypes, actorTypes],
  resolvers: merge(resolvers, movieResolvers)
});
