import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import schemaGraphql from "./schema.graphql";
import links from "./links";
mongoose.connect(links.development, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set("useCreateIndex", true);
const server = new ApolloServer({
  schema: schemaGraphql,
  context({ req }) {
    console.log(req.headers.authorization, "AUTH");
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
