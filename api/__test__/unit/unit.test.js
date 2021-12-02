const COUNTER = require("../../src/testHelpers/initialTest");

describe("Testing counter initializer", ()=>{
    test("Basic calculation function",()=>{
        expect(COUNTER.letterCount("awesome", "e")).toBe(2);
    })
})