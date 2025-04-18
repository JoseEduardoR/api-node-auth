const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    openapi: '3.0.0',
    info:{
        title: 'API de Autenticación',
        version: '1.0.0',
        description: 'API REST para registro, login y rutas protegidas'
    },
    servers:[{
        url:'http://localhost:3000/api',
        description: 'Servidor local'
    }],
    components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT'
          }
        }
      },
      security: [
        {
          bearerAuth: []
        }
      ]
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'],
}

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;