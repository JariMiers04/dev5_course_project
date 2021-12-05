'use strict';

const BODYPARSER = require("body-parser");
const EXPRESS = require("express");
const APP = EXPRESS();
const PORT = process.env.API_PORT;


const {MIGRATE} = require("./database/migrate");
const {SEED} = require("../src/database/seeder");
const {KNEX} = require("./knex");

APP.use(BODYPARSER.urlencoded({
    extended: true
}))
APP.use(BODYPARSER.json());

async function initializer(){
   await MIGRATE.makeTables();
//    await SEED.insertData();
};

initializer();

/**
 * 
 * FOOD
 * 
 */

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

    postFoodData(postFood).then(res.status(200).send(req.body));
});

async function postFoodData(addFood){
    await KNEX.table('food').insert({
        barcode: addFood.barcode,
        product_name: addFood.product_name,
        expiration_date: addFood.expiration_date,
        weight: addFood.weight
    })
}


APP.put("/food/:barocde", async ()=>{
    let item = KNEX.table("food").where({
        barcode: req.params.barcode
    }).update({
        product_name: req.body.product_name,
        expiration_date: req.body.expiration_date,
        weight: req.body.weight
    })

    res.sendStatus(200).send(await item);
})


APP.delete("/food/:barcode", async (req,res)=>{
    let item = KNEX.table("food").where({
        barcode: req.params.barcode
    }).delete();

    res.sendStatus(200).send(await item);
})


/**
 * 
 * USERS
 * 
 */

 APP.get("/users", async (req,res)=>{
    await KNEX.select().table('users').then((data)=>{
        res.send(data);
    })
});


APP.get("/user/:id", async (req,res)=>{
    console.log(req.params.id);

    let user = KNEX.table('users').where({
        id: req.params.id
    }).first().then((row)=>row);

    res.send(await user);
});


APP.post("/user", async (req,res)=>{
    let id = req.body.id;
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    let postUser = {
        id,
        name,
        email,
        password
    }

    userPost(postUser).then(res.status(200).send(req.body));
});

async function userPost(postUser){
    await KNEX.table('users').insert({
        id: postUser.id,
        name: postUser.name,
        email: postUser.email,
        password: postUser.password
    })
}


APP.put("/user/:id", async ()=>{
    let user = KNEX.table("users").where({
        id: req.params.id
    }).update({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    res.sendStatus(200).send(await user);
})


APP.delete("/user/:id", async (req,res)=>{
    let user = KNEX.table("users").where({
        id: req.params.id
    }).delete();

    res.sendStatus(200).send(await user);
})

APP.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})


module.exports = {APP, postFoodData, userPost}