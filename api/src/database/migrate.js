'use strict';

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

/**
 * 
 */

const MIGRATE = {

    async makeTables(){

        await KNEX.schema.hasTable("food").then(async function (exists) {
            if (!exists) {
                return await KNEX.schema.createTable('food', (table) => {
                    table.double('barcode', 12).primary();
                    table.string('product_name');
                    table.date('expiration_date');
                    table.integer('weight');
                })
            }
        });

        await KNEX.schema.hasTable("users").then(async function(exists){
            if(!exists){
                return await KNEX.schema.createTable('users', (table) => {
                    table.increments('id').primary();
                    table.string('name');
                    table.string('email');
                    table.string('password');
                })
            }
        });

        await KNEX.schema.hasTable("fridge").then(async function(exists){
            if(!exists){
                return await KNEX.schema.createTable('fridge', (table) => {
                    table.increments('id').primary();
                })
            }
        });

    }
}

module.exports = {MIGRATE, KNEX}