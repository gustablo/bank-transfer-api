import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type Wallet {
        amount: Int!
    }

    type User {
        name: String!
        key: String!
        accessToken: String!
        wallet: Wallet!
    }

    type Transaction {
        to: String!
        from: String!
        amount: Int!
    }

    input UserInput {
        name: String!
        key: String!
    }

    input TransactionInput {
        to: String!
        from: String!
        amount: Int!
    }

    type Mutation {
        createUser(input:UserInput):User
        transact(input:TransactionInput):Transaction
    }

    type Query {
        getUser(accessToken: String): User
    }
`;
