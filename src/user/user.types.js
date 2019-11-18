import { gql } from "apollo-server";

export default gql`
  extend type Query {
    user(id: String): UserType
    allUsers(search: String, first: Int, skip: Int): [UserType]
  }
  extend type Mutation {
    addEditUser(user: UserInput): UserType
    deleteUser(id: String!): UserType
  }
  type UserType {
    id: String
    firstName: String
    lastName: String
    phoneNumber: String
    dateOfBirth: Date
  }
  input UserInput {
    id: String
    firstName: String
    lastName: String
    phoneNumber: String
    dateOfBirth: Date
  }
`;
