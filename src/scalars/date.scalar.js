import { GraphQLScalarType } from "graphql";
import { Kind } from "graphql/language";
import { gql } from "apollo-server";
const dateResolvers = {
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar",
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    }
  })
};

const dateTypes = gql`
  scalar Date
`;

export { dateResolvers, dateTypes };
