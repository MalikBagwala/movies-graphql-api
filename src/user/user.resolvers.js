import User from "./user.model";

export default {
  Query: {
    allUsers(_, { first, skip }) {
      return User.find()
        .limit(first)
        .skip(skip);
    },
    user(_, { id }) {
      return User.findById(id);
    }
  },
  Mutation: {
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
