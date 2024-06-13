// import { ApolloServer } from "@apollo/server";
import { ApolloServer } from 'apollo-server'
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
import path from "path";
import { gql } from "graphql-tag";
import { resolvers } from "./resolvers";
import { MarketplaceAPI } from "./datasources/marketplace-api";
import { StringDecoder } from "string_decoder";

const typeDefs = gql(
  readFileSync(path.resolve(__dirname, "./schema.graphql"), {
    encoding: "utf-8",
  })
);

// async function startApolloServer() {
//   const server = new ApolloServer({
//     typeDefs,
//     resolvers
//   });
//
//   const { url } = await startStandaloneServer(server, {
//     context: async ({ req}) => {
//       const { cache } = server;
//
//       return {
//         dataSources: {
//           marketplaceAPI: new MarketplaceAPI({ cache }),
//         },
//       };
//     },
//   });
//   console.log(`
//     🚀  Server is running!
//     📭  Query at ${url}
//   `);
// }

async function startApolloServer() {
  const server: ApolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
      // console.log(req.body);

      // console.log('Request body:', req.body);
      // console.dir(req.body.query, {depth: null})

      // console.log('Request headers:', req.headers);

      // const { cache } = server;
      return {
        dataSources: {
          marketplaceAPI: new MarketplaceAPI(),
        },
        query: req.body.query
      };
    },
  });

  const { url } = await server.listen({ port: 4000 });
  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}


startApolloServer();
