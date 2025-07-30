const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './config/swagger'
import { errorHandler } from './middlewares';
import routes from './routes';
const app = express();  

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


app.use("/api", routes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));



//GLOBAL ERROR
app.use(errorHandler);




export default app;