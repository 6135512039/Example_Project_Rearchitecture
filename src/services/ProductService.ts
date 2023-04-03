import axios, { Axios, AxiosResponse } from "axios"
import { ProductMapper } from "../utilities/mappers/ProductMapper";
import { Product } from "../domains/entities/Product";

class ProductSevice {
    public async getAllProduct() {
        const response = await axios.get(`${process.env.PRODUCT_URL}`);
        const productResponse = response.data;
        const productList =  ProductMapper.toProductList(productResponse);

        return { statusCode: response.status, response: productList };
      }

      public async getProductByProductId(productId: number) {
        const response: AxiosResponse = await axios.get(`${process.env.PRODUCT_URL}`);
        const productResponse: AxiosResponse['data'] = response.data;
        const productList: Product[] = ProductMapper.toProductList(productResponse);
        const product: Product | undefined = productList.find(product => product.id === productId);

        return { statusCode: response.status, response: product }
      }
}

export default new ProductSevice();
