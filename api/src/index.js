'use strict';

const BODYPARSER = require("body-parser");
const EXPRESS = require("express");
const APP = EXPRESS();
const PORT = process.env.API_PORT;


const {MIGRATE} = require("./database/migrate");
const {SEED} = require("../src/database/seeder");
const {KNEX} = require("./knex");

APP.use(BODYPARSER.urlencoded({
    extended: false
}))
APP.use(BODYPARSER.json());

async function initializer(){
   await MIGRATE.makeTables();
//    await SEED.insertData();
};

initializer();


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
});

APP.post("/food", async (req,res)=>{
    let barcode = req.body.barcode;
    let product_name = req.body.product_name;
    let expiration_date = req.body.expiration_date;
    let weight = req.body.weight;

    let postFood = {
        barcode,
        product_name,
        expiration_date,
        weight
    }

    await postFoodData(postFood);

    res.status(200).send();
});

async function postFoodData(addFood){
    await KNEX.table('food').insert({
        barcode: addFood.barcode,
        product_name: addFood.product_name,
        expiration_date: addFood.expiration_date,
        weight: addFood.weight
    })
}


APP.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})


module.exports = {APP, postFoodData}