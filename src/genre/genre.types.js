import { gql } from "apollo-server";

export default gql`
  extend type Mutation {
    addEditGenre(id: String, name: String!): GenreType
    deleteGenre(id: String): GenreType
  }
  extend type Query {
    allGenres(search: String, first: Int, skip: Int): [GenreType]
    genre(id: String): GenreType
  }
  type GenreType {
    id: String
    name: String
  }
`;
