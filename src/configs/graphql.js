
import { typeDefs } from '../app/graphql/typedefs.js';
import { resolvers } from '../app/graphql/resolvers.js';
import { graphqlHTTP } from 'express-graphql';
import { ApolloServer} from 'apollo-server-express';

export default app => {
    const server = new ApolloServer({
        cors: true,
        typeDefs,
        resolvers,

    })

    server.start().then(_ => {
        server.applyMiddleware({ app, path: '/graphql' });
    })

}