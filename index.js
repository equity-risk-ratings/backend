require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const router = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger('dev'));
app.use(helmet());

app.get('/', (req, res) => res.status(200).json({
  success: true,
  message: 'API is alive...'
}));

app.use('/api/v1', router);

// Handle invalid request
app.all('*', (req, res) => res.status(400).json({
  success: false,
  message: 'Route does not exist ....'
}));

module.exports = app;
