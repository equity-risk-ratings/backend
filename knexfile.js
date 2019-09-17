const env = require('dotenv');
env.config();

module.exports = {
  development: {
    client: 'postgresql',
    useNullAsDefault: true,
    connection: process.env.DB_CONNECTION_TEST,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  testing: {
    client: 'postgresql',
    connection: process.env.DB_CONNECTION_TEST,
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  production: {
    client: 'postgrsql',
    connection: process.env.DB_CONNECTION,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};