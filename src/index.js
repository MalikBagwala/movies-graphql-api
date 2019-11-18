import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import schemaGraphql from "./schema.graphql";
import links from "./links";
mongoose.connect(links.development, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const server = new ApolloServer({ schema: schemaGraphql });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
