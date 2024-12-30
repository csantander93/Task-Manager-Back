const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Task Management API",
    version: "1.0.0",
    description: "API para gestionar tareas de usuarios",
  },
  servers: [
    {
      url: "http://localhost:5000/api",
      description: "Servidor de desarrollo",
    },
  ],
};

const swaggerOptions = {
  swaggerDefinition,
  apis: ["./src/routes/*.js", "./src/controllers/*.js"], // Ajusta las rutas según tu estructura de carpetas.
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

module.exports = {
  swaggerUi,
  swaggerSpec,
};
