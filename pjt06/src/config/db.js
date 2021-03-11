const { Pool } = require('pg')

module.exports = new Pool ({
    user: 'postgres',
    password: 'dema8484',
    host: 'localhost',
    port: 5432,
    database: 'gymmanager'
})