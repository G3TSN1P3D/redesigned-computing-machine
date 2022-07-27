const Doggies = require("../models");

const resolvers = {
  Query: {
    doggie: async (parent, { doggieId }) => {
      const doggiesData = await Doggies.findById({ _id: doggieId });
      return doggiesData;
    },
    allDoggies: async () => {
      const doggies = await Doggies.find();
      return doggies;
    }
  },
  Mutation: {
    addDoggies: async (parent, { input }) => {
      const doggies = await Doggies.create({
        dogName: input.dogName,
        ownersName: input.ownersName,
        phoneNumber: input.phoneNumber,
        room: input.room,
        crate: input.crate,
      });
      return doggies;
    },
    editDoggies: async (parent, { doggieId, input }) => {
      const doggies = await Doggies.findByIdAndUpdate(
        { _id: doggieId },
        {
          $set: {
            dogName: input.dogName,
            ownersName: input.ownersName,
            phoneNumber: input.phoneNumber,
            room: input.room,
            crate: input.crate,
          },
        }
      );
      return doggies;
    },
    removeDoggie: async (parent, { doggieId }) => {
      const doggies = await Doggies.findOneAndDelete({ _id: doggieId });
      return doggies;
    },
  },
};

module.exports = resolvers;