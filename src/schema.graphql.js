import { GenreType } from "./genre/genre.types";
import { makeExecutableSchema } from "graphql-tools";
import { gql } from "apollo-server";
// import genreData from "./genre/genre.data";
import { merge } from "lodash";
import Genre from "./genre/genre.model";

const Query = gql`
  type Query {
    allGenres: [GenreType]
    genre(id: String): GenreType
  }
  type Mutation {
    addEditGenre(id: String, name: String!): GenreType
    deleteGenre(id: String): GenreType
  }
`;

const resolvers = {
  Query: {
    allGenres() {
      return Genre.find();
    },
    genre(_, { id }) {
      return Genre.findById(id);
    }
  },
  Mutation: {
    addEditGenre(_, { id, name }) {
      if (id) {
        return Genre.findByIdAndUpdate(id, {
          $set: {
            name
          }
        });
      } else {
        return Genre.create({ name });
      }
    },
    deleteGenre(_, { id }) {
      if (id) Genre.findByIdAndDelete(id);
    }
  }
};
export default makeExecutableSchema({
  typeDefs: [Query, GenreType],
  resolvers: merge(resolvers)
});
