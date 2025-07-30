import swaggerJSDoc from "swagger-jsdoc";
import { Options } from "swagger-jsdoc";

const options: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API REST Express Boilerplate",
      version: "1.0.0",
      description: "Documentación generada automáticamente con Swagger",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ["src/routes/**/*.ts", "src/docs/**/*.ts"],
};

export const swaggerSpec = swaggerJSDoc(options);