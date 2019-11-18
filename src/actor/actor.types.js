import { gql } from "apollo-server";

export default gql`
  type ActorType {
    id: String
    fullName: String
    firstName: String
    lastName: String
    age: Int
  }
  input ActorInput {
    id: String
    firstName: String
    lastName: String
    age: Int
  }
`;
