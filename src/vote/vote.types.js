import { gql } from "apollo-server";

export default gql`
  extend type Mutation {
    addEditVote(userId: String, movieId: String, rating: Float): VoteType
  }
  extend type Query {
    allVotes: [VoteType]
  }
  type VoteType {
    id: String
    rating: Float
    user: UserType
    movie: MovieType
  }
`;
