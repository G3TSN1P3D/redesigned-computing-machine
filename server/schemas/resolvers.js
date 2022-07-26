const Doggies = require("../models");

const resolvers = {
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
    removeDoggies: async (parent, { doggieId }) => {
        const doggies = await Doggies.findOneAndDelete({ _id: doggieId });
        return doggies;
    },
  },
};
