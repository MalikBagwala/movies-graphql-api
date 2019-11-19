import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import schemaGraphql from "./schema.graphql";
import links from "./links";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import User from "./user/user.model";
dotenv.config();
mongoose.connect(links.development, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set("useCreateIndex", true);
const server = new ApolloServer({
  schema: schemaGraphql,
  async context({ req }) {
    const authToken = req.headers.authorization;
    const authenticated = authToken && jwt.decode(authToken);
    if (authenticated) {
      const user = await User.findById(authenticated.id);
      return {
        user
      };
    } else {
      return {
        user: null
      };
    }
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
