const SUPERTEST = require('supertest');
const {SERVER} = require("../../src/index.js");

const TEST = SUPERTEST(SERVER);


describe("Testing data on endpoints", ()=>{
    test("this is just an initializer",()=>{
        expect(2+2).toBe(4);
    })
});