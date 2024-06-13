import { MarketplaceAPI } from "./datasources/marketplace-api";

export type DataSourceContext = {
  dataSources: {
    marketplaceAPI: MarketplaceAPI;
  };
  query: string;
};