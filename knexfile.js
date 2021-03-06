// Update with your config settings.

module.exports = {
  test: {
    client: 'pg',
    connection: {
      'user': process.env.PG_USER || "reena",
      'database': 'ft_test',
      'password': process.env.PG_PASSWORD || ""
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/test'
    }
  },
  development: {
    client: 'pg',
    connection: {
      'user': process.env.PG_USER || "reena",
      'database': 'ft_dev',
      'password': process.env.PG_PASSWORD
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/production'
    }
  }
};

