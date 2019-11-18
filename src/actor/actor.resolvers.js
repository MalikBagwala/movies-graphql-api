export default {
  Query: {
    allActors() {
      return Actor.find();
    },

    actor(_, { id }) {
      return Actor.findById(id);
    }
  },
  Mutation: {
    addEditActor(_, { actor }) {
      if (actor.id) {
        return Actor.findByIdAndUpdate(actor.id, actor);
      } else {
        return Actor.create(actor);
      }
    },

    async deleteActor(_, { id }) {
      const deletedActor = await Actor.findByIdAndRemove(id);
      return deletedActor;
    }
  },
  ActorType: {
    fullName(actor) {
      return `${actor.firstName} ${actor.lastName}`;
    }
  }
};
