'use strict';

const BODYPARSER = require("body-parser");
const EXPRESS = require("express");
const APP = EXPRESS();
const PORT = process.env.API_PORT;

APP.use(bodyParser.urlencoded({
    extended: false
}))
APP.use(bodyParser.json());

APP.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})