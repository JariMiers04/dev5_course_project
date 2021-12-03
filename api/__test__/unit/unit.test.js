const SUPERTEST = require('supertest');
const COUNTER = require("../../src/testHelpers/initialTest");
const {MIGRATE, KNEX} = require("../../src/database/migrate");
const {SEED} = require("../../src/database/seeder");


describe("Testing counter initializer", ()=>{
    test("Basic calculation function",()=>{
        expect(COUNTER.letterCount("awesome", "e")).toBe(2);
    })
});

describe("Testing insert in database", ()=>{
    // test("Check if insert worked on food table", async ()=>{
    //     const testFoodData = {
    //         barcode: 5400141916229
    //     };

    //    const barcode = await KNEX.select().table('food').where('barcode', testFoodData.barcode);
    //     console.log(testFoodData.barcode);
    //    expect(testFoodData.barcode).toBe(barcode);

    // });


    // test("Check if insert worked on users table", async ()=>{
    //     const testUserData = {
    //         id: 1
    //     };

    //    const user = await KNEX.select().table('users').where('id', testUserData.id);
    //     console.log(user);
    //    expect(user).toBe(testUserData);

    // });

    // test("Check if insert worked on frdige table", async ()=>{
    //     const testFridgeData = {
    //         id: 1
    //     };

    //    const fridge = await KNEX.select().table('fridge').where('id', testFridgeData.id);
    //     console.log(fridge);
    //    expect(fridge.id).toBe(testFridgeData.id);

    // });

})