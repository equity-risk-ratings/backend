require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());
app.use(logger('dev'));
app.use(helmet());

app.get('/', (req, res) => res.status(200).json({
  success: true,
  message: 'API is alive...'
}));



const server = require('./api/server.js');

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`\n>>> Magic Happening on http://localhost:${port} <<< \n`);
});