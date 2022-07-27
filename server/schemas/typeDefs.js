const { gql } = require("apollo-server-express");

const typeDefs = gql`
    scalar Date
    type Doggies {
        _id: ID
        dogName: String
        ownersName: String
        phoneNumber: String
        room: Int
        crate: Int
        checkIn: Date
    }
    type Query {
        doggie(doggieId: ID!): Doggies
        allDoggies: [Doggies]
    }
    input NewDoggieInput {
        dogName: String
        ownersName: String
        phoneNumber: String
        room: Int
        crate: Int
    }
    type Mutation {
        addDoggies(doggieId: ID, input: NewDoggieInput): Doggies
        editDoggies(doggieId: ID!, input: NewDoggieInput): Doggies
        removeDoggie(doggieId: ID!): Doggies
    }
`;

module.exports = typeDefs;
