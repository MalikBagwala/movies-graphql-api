import { gql } from "apollo-server";

export default gql`
  extend type Query {
    allMovies(search: String, first: Int, skip: Int): [MovieType]
    movie(id: String): MovieType
  }
  extend type Mutation {
    addEditMovie(movie: MovieInput): MovieType
    deleteMovie(id: String): MovieType
  }
  type MovieType {
    id: String
    title: String
    year: Int
    rating: Float
    genres: [GenreType]
    actors: [ActorType]
  }
  input MovieInput {
    id: String
    title: String
    year: Int
    rating: Float
    genres: [String!]
    actors: [String!]
  }
`;
