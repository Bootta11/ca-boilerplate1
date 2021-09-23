const fs = require('fs')
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

module.exports = {
  development: {
    username: process.env.DB_USERNAME || 'mogul_user',
    password: process.env.DB_PASSWORD || 'test1234',
    database: process.env.DB_NAME || 'moguldb',
    host: process.env.DB_HOSTNAME || '127.0.0.1',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
  },
  staging: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    dialect: 'postgres',
  }
};
