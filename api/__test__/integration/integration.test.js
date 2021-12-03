const SUPERTEST = require('supertest');
const {APP} = require("../../src/index.js");

const TEST = SUPERTEST(APP);


describe("Testing data on endpoints", ()=>{
    it("this is just an initializer",()=>{
        expect(2+2).toBe(4);
    })
});

describe("Testing post data on endpoints", ()=>{
    it("testing post method on food", (done)=>{
         TEST.post('/food').send({
            barcode: 5200141837741,
            product_name: "Test",
            expiration_date: "2021-11-05",
            weight: 30
        }).expect(200).then(()=>{
            done();
          })
    })
})