const SUPERTEST = require('supertest');
const {APP} = require("../../src/index.js");

const {KNEX} = require("../../src/knex");
const {SEED} = require("../../src/database/seeder");

const REQUEST = SUPERTEST(APP);


beforeAll(async ()=>{
    await KNEX('food').del();
    await KNEX('users').del();
    await KNEX('fridge').del();
    SEED.insertData();
})


describe("Testing data on endpoints", ()=>{
    it("this is just an initializer",()=>{
        expect(2+2).toBe(4);
    })
});


describe("Testing GET endpoints", ()=>{

    /**
     * 
     * GET FOODS
     */
    it("/ endpoint of foods", (done)=>{
        REQUEST.get("/").expect(200).end((err,res)=>{
            try{
                done();
            }catch(err){
                done(err);
            }
        })
    })
    
    it("/ length of endpoint of foods", (done)=>{
        REQUEST.get("/").expect(200).end((err,res)=>{
            try{
                expect(res.body.length).toBe(3)
                done();
            }catch(err){
                done(err);
            }
        })
    })
    it("/ validation of endpoints foods", (done)=>{
        REQUEST.get("/").expect(200).end((err,res)=>{
            try{
                expect(res.body[0].barcode).toEqual(5400141916229);
                expect(res.body[0].product_name).toEqual("Salami");
                expect(res.body[1].expiration_date).toEqual("2021-11-17");
                expect(res.body[1].weight).toEqual(150);
                done();
            }catch(err){
                done(err);
            }
        })
    })

    const getOnBarcode = {
        barcode: 5400141299649,
        product_name: "6 eieren",
        expiration_date: "2021-11-05",
        weight: 70
    }

    it("/food/:barcode getting a specific item from the database", (done)=>{
        REQUEST.get("/food/5400141299649").expect(200).end((err,res)=>{
            try{
                console.log("Get on barcode", res.body)
                expect(res.body).toEqual(getOnBarcode);
                done();
            }catch(err){
                done(err);
            }
        })
    })



})


describe("Testing POST endpoints", ()=>{
    
    /**
     * 
     * POST FOODS
     */

     const addFoodItem = {
        barcode: 5400141299627,
        product_name: "This is a test from the integration",
        expiration_date: "2021-12-04",
        weight: 69
    }

    it("/ connect with endpoint that is not a post", (done)=>{
        REQUEST.post("/").send(addFoodItem).expect(400).end((err,res)=>{
            try{
                done();
            }catch(err){
                done(err);
            }
        })
    })

    it("/food add food item", (done)=>{

        REQUEST.post("/food").send(addFoodItem).expect(200).end((err,res)=>{
            try{
                console.log(res.body);
                expect(res.body.barcode).toEqual(addFoodItem.barcode);
                expect(res.body.product_name).toEqual("This is a test from the integration");
                expect(res.body.weight).toEqual(69);
                done()
            }catch(err){
                done(err);
            }
        })
    })
})

afterAll(async()=>{
    try{
        KNEX.destroy();
    }catch(err){
        console.log(err);
    }
})