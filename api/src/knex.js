const KNEX = require('knex')({
    client: "pg",
    connection: {
        host: process.env.POSTGRES_HOST ? process.env.POSTGRES_HOST : 'localhost',
        port: 5432,
        user: process.env.POSTGRES_USER ? process.env.POSTGRES_USER : "root",
        password: process.env.POSTGRES_PASSWORD ? process.env.POSTGRES_PASSWORD : 'root',
        database: process.env.POSTGRES_DB ? process.env.POSTGRES_DB : "foodStock"
    }
});

module.exports = {KNEX}