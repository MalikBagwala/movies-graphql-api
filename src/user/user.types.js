import { gql } from "apollo-server";

export default gql`
  extend type Query {
    user(id: String): UserType
    currentUser: UserType
    allUsers(search: String, first: Int, skip: Int): [UserType]
  }
  extend type Mutation {
    register(username: String!, password: String!): UserType
    login(username: String!, password: String!): LoginResponseType
    addEditUser(user: UserInput): UserType
    deleteUser(id: String!): UserType
  }
  type UserType {
    id: String
    username: String
    firstName: String
    lastName: String
    phoneNumber: String
    dateOfBirth: Date
  }
  input UserInput {
    id: String
    username: String
    password: String
    firstName: String
    lastName: String
    phoneNumber: String
    dateOfBirth: Date
  }
  type LoginResponseType {
    token: String
    user: UserType
  }
`;
