require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const limiter = require('./middlewares/limiter');
const error = require('./middlewares/error');
const swaggerDocs = require('./swagger.json');

const app = express();
app.use(helmet());
app.use(limiter);
app.use(express.json());
app.use(morgan('common'));

app.use();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(error);

module.exports = app;
