'use strict';

const BODYPARSER = require("body-parser");
const EXPRESS = require("express");
const APP = EXPRESS();
const PORT = process.env.API_PORT;


const {MIGRATE, KNEX} = require("./database/migrate");
const {SEED} = require("../src/database/seeder");

APP.use(BODYPARSER.urlencoded({
    extended: false
}))
APP.use(BODYPARSER.json());


MIGRATE.makeTables();
SEED.insertData();


APP.get("/", async (req,res)=>{
    await KNEX.select().table('food').then((data)=>{
        res.send(data);
    })
});

APP.get("/food/:barcode", async (req,res)=>{
    console.log(req.params.barcode);

    let foodItem = KNEX.table('food').where({
        barcode: req.params.barcode
    }).first().then((row)=>row);

    res.send(await foodItem);
})

APP.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})


module.exports = {APP}