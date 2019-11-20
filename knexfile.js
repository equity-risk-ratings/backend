require("dotenv").config();

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/equity.db3"
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "knex_migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },
  staging: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/equity-test.db3"
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "knex_migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },
  production: {
    client: "postgresql",
    connection: {
      database: "d7a2j7e1etksmm",
      user: "kdcwochqjygxfm",
      password:
        "b1809b41126ad7b0fd7e090d452546c08369ba041e8178d628518d9f2b983731"
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
