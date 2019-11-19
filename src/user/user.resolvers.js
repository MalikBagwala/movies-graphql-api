import User from "./user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export default {
  Query: {
    allUsers(_, { first, skip }) {
      return User.find()
        .limit(first)
        .skip(skip);
    },
    currentUser(_, args, { user }) {
      if (!user) throw new Error("Unauthenticated access, please login");
      return user;
    },
    user(_, { id }) {
      return User.findById(id);
    }
  },
  Mutation: {
    async register(_, { username, password }) {
      const user = await User.exists({ username });
      if (user) {
        throw Error("Username is taken, please try a different username");
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        return User.create({ username, password: hashedPassword });
      }
    },
    async login(_, { username, password }) {
      const user = await User.findOne({ username }).select("+password");
      if (!user) {
        throw new Error("Invalid Credentials");
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        throw new Error("Invalid Credentials");
      }
      const token = jwt.sign(
        {
          id: user.id,
          username: user.username,
          // Will Expire in 7 days
          expiresAt: new Date().getTime() + 604800000
        },
        process.env.JWT_SECRET_KEY
      );
      return {
        user,
        token
      };
    },
    addEditUser(_, { user }) {
      if (user.id) {
        return User.findByIdAndUpdate(user.id, user);
      } else {
        return User.create(user);
      }
    },
    async deleteUser(_, { id }) {
      const deletedUser = await User.findByIdAndRemove(id);
      return deletedUser;
    }
  },
  UserType: {}
};
