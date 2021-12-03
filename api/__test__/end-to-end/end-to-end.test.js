const SUPERTEST = require('supertest');
const {APP} = require("../../src/index.js");

const TEST = SUPERTEST(APP);

describe("Testing database connection", ()=>{
    it("this is just an initializer",()=>{
        expect(2+2).toBe(4);
    })
});

describe("Testing get endpoints", ()=>{
    it("Testing get on food", (done)=>{
     TEST.get("/").expect(200).then(done())
    })

    it("Testing get on barcode in table food",  (done)=>{
        TEST.get("/food/5400141916229").expect(200).then(()=>{
            done()
        })
    })
})