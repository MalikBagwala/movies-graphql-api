import { gql } from "apollo-server";

export default gql`
  extend type Query {
    allActors(search: String, first: Int, skip: Int): [ActorType]
    actor(id: String): ActorType
  }
  extend type Mutation {
    addEditActor(actor: ActorInput): ActorType
    deleteActor(id: String): ActorType
  }
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
