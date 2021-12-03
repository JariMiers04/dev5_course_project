'use strict';

const BODYPARSER = require("body-parser");
const EXPRESS = require("express");
const APP = EXPRESS();
const PORT = process.env.API_PORT;


const {MIGRATE} = require("./database/migrate");
const {SEED} = require("../src/database/seeder");

APP.use(BODYPARSER.urlencoded({
    extended: false
}))
APP.use(BODYPARSER.json());


MIGRATE.makeTables();
SEED.insertData();

APP.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})