import express, { Router, Request, Response } from 'express';
import ProductService from '../services/ProductService';

const router: Router = express.Router();

/**
 * @swagger
 * /product/v1/products:
 *      get:
 *        description: get all product
 *        responses: 
 *          200:
 *            description: success
 */
router.get('/v1/products', async (req: Request, res: Response) => {
    try {
        const { statusCode, response } = await ProductService.getAllProduct();

        res.status(statusCode).json(response)
    } catch (error) {
        console.log(error);
    }
  });

/**
 * @swagger
 * /product/v1/products/{productId}:
 *      get:
 *        summary: create product by productId
 *        parameters: 
 *          - name: productId
 *            in: path
 *            schema:
 *              type: number
 *            required: true
 *            description: numeric of product
 *        responses:
 *          200:
 *            description: success
 */
router.get('/v1/products/:productId', async (req: Request, res: Response) => {
    try {
        const productId: number = parseInt(req.params.productId);
        const { statusCode, response } = await ProductService.getProductByProductId(productId);

        res.status(statusCode).json(response);
    } catch (error) {
        console.log(error);
    }
});

export default router;
