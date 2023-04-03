import { Product } from "../../domains/entities/Product";
import { ProductMapperResponse } from "../../domains/interfaces/mappers/ProductMapperResponse";


export class ProductMapper {
    static toProduct(product: ProductMapperResponse): Product {
        const { id, title, subtitle, description, price, image_url } = product;

        return { id, title, subtitle, description, price, imageUrl: image_url };
    }

    static toProductList(productList: ProductMapperResponse[]): Product[] {
        return productList.map(product => ProductMapper.toProduct(product));
    }
}
