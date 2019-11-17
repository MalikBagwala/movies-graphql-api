import { gql } from "apollo-server";

export default gql`
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
