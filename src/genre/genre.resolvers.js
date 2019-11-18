export default {
  Query: {
    allGenres(_, { first, skip }) {
      return Genre.find()
        .limit(first)
        .skip(skip);
    },
    genre(_, { id }) {
      return Genre.findById(id);
    }
  },
  Mutation: {
    addEditGenre(_, { id, name }) {
      if (id) {
        return Genre.findByIdAndUpdate(id, { name });
      } else {
        return Genre.create({ name });
      }
    },

    async deleteGenre(_, { id }) {
      const deletedGenre = await Genre.findByIdAndRemove(id);
      return deletedGenre;
    }
  },
  GenreType: {}
};
