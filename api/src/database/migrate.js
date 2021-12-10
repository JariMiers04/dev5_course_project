'use strict';

const {KNEX} = require("../knex");
const MIGRATE = {

    async makeTables(){

        try{

            await KNEX.schema.hasTable("fridge").then(async (exists)=>{
                if(!exists){
                    return await KNEX.schema.createTable('fridge', (table) => {
                        table.integer('id').primary();
                    })
                }
            });

            await KNEX.schema.hasTable("food").then(async (exists) => {
                if (!exists) {
                    return await KNEX.schema.createTable('food', (table) => {
                        table.double('barcode', 12).primary();
                        table.string('product_name').notNullable();
                        table.string('expiration_date').notNullable();
                        table.integer('weight').notNullable();
                        table.integer("fridge_id").unsigned().notNullable().references('id').inTable('fridge');
                    })
                }
            });
    
            await KNEX.schema.hasTable("users").then(async (exists)=>{
                if(!exists){
                    return await KNEX.schema.createTable('users', (table) => {
                        table.increments('id').primary();
                        table.string('name').notNullable();
                        table.string('email').notNullable();
                        table.string('password').notNullable();
                        table.integer("fridge_id").unsigned().notNullable().references('id').inTable('fridge');
                    })
                }
            });
        }catch(err){
            console.log(err);
            // process.exit(1);
        }


    }
}

module.exports = {MIGRATE, KNEX}