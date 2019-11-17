const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
import schemaGraphql from "./schema.graphql";
mongoose.connect("mongodb://localhost:27017/movies-graphql-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const server = new ApolloServer({ schema: schemaGraphql });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
