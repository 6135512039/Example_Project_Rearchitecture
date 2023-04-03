import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Library API",
            version: "1.00"
        }
    },
    apis: ['./src/routes/*.ts']
}

const swaggerDocument = swaggerJSDoc(swaggerOptions);

export default swaggerDocument;