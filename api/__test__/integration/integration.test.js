const SUPERTEST = require('supertest');
const {APP} = require("../../src/index.js");

const REQUEST = SUPERTEST(APP);


describe("Testing data on endpoints", ()=>{
    it("this is just an initializer",()=>{
        expect(2+2).toBe(4);
    })
});


describe("Testing all the get endpoints", ()=>{
    it("/", (done)=>{
        REQUEST.get("/").expect(200).end((err,res)=>{
            try{
                done();
            }catch(err){
                done(err);
            }
        })
    })
    
    it("/", (done)=>{
        REQUEST.get("/").expect(200).end((err,res)=>{
            try{
                expect(res.body.length).toBe(3)
                done();
            }catch(err){
                done(err);
            }
        })
    })
})


// describe("Testing POST data on endpoints", ()=>{
//     it("This test should fail there is no send data", (done)=>{
//          REQUEST.post('/food').expect(400).end(()=>{
//              try{
//                  done();

//              }catch(err){
//                  console.log(err);
//                  done(err);
//              }
//          })
//     });
// })