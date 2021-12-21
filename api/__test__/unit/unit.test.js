const SUPERTEST = require('supertest');
const COUNTER = require("../../src/testHelpers/initialTest");
const {MIGRATE, KNEX} = require("../../src/database/migrate");
const {SEED} = require("../../src/database/seeder");


const FOODHELPER = require("../../src/testHelpers/foodTester");

const food =  {
    barcode: 5400141916229,
    product_name: "Salami",
    expiration_date: "2022-12-30",
    weight: 40,
    fridge_id: 1
}

const user =  {
    id: 1,
    name: "Jari Miers",
    email: "jari.miers@student.ehb.be",
    password: "test",
    fridge_id: 1
}


describe("Testing POSTS", ()=>{
    it("check FOOD POST", (done)=>{
        expect(FOODHELPER.checkPostFood(food)).toBeTruthy();

        expect(FOODHELPER.checkFoodBarcode(food.barcode)).toBeTruthy();
        expect(FOODHELPER.checkFoodBarcode(2345678923456789)).toBeFalsy();

        expect(FOODHELPER.checkFoodProductName(food.product_name)).toBeTruthy();
        expect(FOODHELPER.checkFoodProductName('')).toBeFalsy();

        expect(FOODHELPER.checkExpirationDate(food.expiration_date)).toBeTruthy();
        expect(FOODHELPER.checkExpirationDate("2020-12-01")).toBeFalsy();

        expect(FOODHELPER.checkFoodWeight(food.weight)).toBeTruthy();
        expect(FOODHELPER.checkFoodWeight(0)).toBeFalsy();

        done();
    })
})