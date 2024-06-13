import { RESTDataSource } from "@apollo/datasource-rest";
import { Product } from "../types";

export class MarketplaceAPI extends RESTDataSource {
  baseURL = "http://localhost:3000/";

  async getProducts(relations: string | null): Promise<Product[]> {
    const path = relations ? `products?relations=${relations}` : 'products';
    const response = await this.get<Product[]>(path);
    return response ?? [];
  }

  async getProduct(id: string, relations: string | null): Promise<Product | null> {
    return await this.get<Product | null>(`products/${id}?relations=${relations}`)
  }
}
