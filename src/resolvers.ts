import { Resolvers } from "./types";
import { getRelationsFromQuery } from './utils/query-helper';

export const resolvers: Resolvers = {
  Query: {
    products: (_, __, { dataSources}, info) => {
      const relations = getRelationsFromQuery(info);

      return dataSources.marketplaceAPI.getProducts(relations);
    },
    product: (_, { id }, { dataSources }, info) => {
      const relations = getRelationsFromQuery(info);

      return dataSources.marketplaceAPI.getProduct(id, relations);
    }
  },
};
