import { PORT } from './config';
import server from './graphql';
import { startStandaloneServer } from '@apollo/server/standalone';

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: PORT },
});

console.log(`🚀  Server ready at: ${url}`);
