import express, { Express } from 'express';
import swaggerUi from 'swagger-ui-express';
import productController from './routes/ProductController';
import swaggerDocument from './utilities/swaggers/swagger';

require('dotenv').config();

const app: Express = express();

app.use("/swagger-ui", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/product", productController);

app.listen(process.env.PORT, () => {
    console.log('Server listening at ' + process.env.PORT);
});
