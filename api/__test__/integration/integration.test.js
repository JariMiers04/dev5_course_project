const SUPERTEST = require('supertest');
const {APP} = require("../../src/index.js");

const REQUEST = SUPERTEST(APP);


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
                expect(res.body).toEqual(getOnBarcode);
                done();
            }catch(err){
                done(err);
            }
        })
    })



})


describe("Testing POST endpoints", ()=>{
    it("This test should fail there is no send data", (done)=>{
         REQUEST.post('/food').expect(400).end(()=>{
             try{
                 done();

             }catch(err){
                 console.log(err);
                 done(err);
             }
         })
    });
})