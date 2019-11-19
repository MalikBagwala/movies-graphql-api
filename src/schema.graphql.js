import { gql } from "apollo-server";
import { makeExecutableSchema } from "graphql-tools";
import { merge } from "lodash";
import actorResolvers from "./actor/actor.resolvers";
import actorTypes from "./actor/actor.types";
import genreTypes from "./genre/genre.types";
import movieResolvers from "./movies/movie.resolvers";
import movieTypes from "./movies/movie.types";
import { dateTypes } from "./scalars/date.scalar";
import userResolvers from "./user/user.resolvers";
import userTypes from "./user/user.types";
import voteTypes from "./vote/vote.types";
import voteResolvers from "./vote/vote.resolvers";

const Types = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`;

export default makeExecutableSchema({
  typeDefs: [
    Types,
    genreTypes,
    movieTypes,
    actorTypes,
    userTypes,
    dateTypes,
    voteTypes
  ],
  resolvers: merge(movieResolvers, actorResolvers, userResolvers, voteResolvers)
});
