const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Doggies {
        _id: ID
        dogName: String
        ownersName: String
        phoneNumber: Int
        room: Int
        crate: Int
        checkIn: Date
    }
    input NewDoggieInput {
        dogName: String
        ownersName: String
        phoneNumber: Int
        room: Int
        crate: Int
    }
    type Mutation {
        addDoggies(doggieId: ID, input: NewDoggieInput): Doggies
        editDoggies(doggieId: ID!, inpput: NewDoggieInput): Doggies
        removeDoggie(doggieId: ID!): Doggies
    }
`;

module.exports = typeDefs;
