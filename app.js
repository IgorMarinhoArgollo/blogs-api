const express = require('express');
const helmet = require('helmet');
const rescue = require('express-rescue');
const swaggerUi = require('swagger-ui-express');
const morgan = require('morgan');
const limiter = require('./middlewares/limiter');
require('dotenv').config();
const error = require('./middlewares/error');
const swaggerDocs = require('./swagger.json');
const routes = require('./routers');

const app = express();
app.use(helmet());
app.use(limiter);
app.use(express.json());
app.use(morgan('common'));

app.use('/login', rescue(routes.login));
app.use('/user', rescue(routes.user));
app.use('/categories', rescue(routes.categories));
app.use('/post', rescue(routes.post));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(error);

module.exports = app;
