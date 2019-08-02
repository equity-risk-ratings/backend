const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../routes/users-router.js');
const companiesRouter = require('../routes/companies-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/companies', companiesRouter);


server.get('/', (req, res) => {
  const nameInsert = (req.name)? `${req.name}` : '';

  res.send(`
    <h2>Equity Risk Ratings API</h2>
    <p>Welcome ${nameInsert} to the Equity Risk Ratings API</p>
  `);
});

module.exports = server;