'use strict';

const {KNEX} = require("../knex");
const MIGRATE = {

    async makeTables(){

        await KNEX.schema.hasTable("food").then(async function (exists) {
            if (!exists) {
                return await KNEX.schema.createTable('food', (table) => {
                    table.double('barcode', 12).primary();
                    table.string('product_name').notNullable();
                    table.date('expiration_date').notNullable();
                    table.integer('weight').notNullable();
                })
            }
        });

        await KNEX.schema.hasTable("users").then(async function(exists){
            if(!exists){
                return await KNEX.schema.createTable('users', (table) => {
                    table.increments('id').primary();
                    table.string('name').notNullable();
                    table.string('email').notNullable();
                    table.string('password').notNullable();
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