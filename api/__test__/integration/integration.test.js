const SUPERTEST = require('supertest');
const {APP} = require("../../src/index.js");

const TEST = SUPERTEST(APP);


describe("Testing data on endpoints", ()=>{
    test("this is just an initializer",()=>{
        expect(2+2).toBe(4);
    })
});