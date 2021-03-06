const SUPERTEST = require('supertest');
const {
    APP
} = require("../../src/index.js");

const {
    KNEX
} = require("../../src/knex");
const {
    SEED
} = require("../../src/database/seeder");

const REQUEST = SUPERTEST(APP);


beforeAll(async () => {
    await KNEX('food').del();
    await KNEX('users').del();
    await KNEX('fridge').del();
    await SEED.insertData();
})


describe("Testing data on endpoints", () => {
    it("this is just an initializer", () => {
        expect(2 + 2).toBe(4);
    })
});


describe("Testing GET endpoints", () => {

    describe("FOOD GET endpoints", () => {
        /**
         * 
         * GET FOODS
         * 
         */

        it("/ endpoint of foods", (done) => {
            REQUEST.get("/").expect(200).end((err, res) => {
                try {
                    done();
                } catch (err) {
                    done(err);
                }
            })
        })

        it("/ length of endpoint of foods", (done) => {
            REQUEST.get("/").expect(200).end((err, res) => {
                try {
                    expect(res.body.length).toBe(3)
                    done();
                } catch (err) {
                    done(err);
                }
            })
        })
        it("/ validation of endpoints foods", (done) => {
            REQUEST.get("/").expect(200).end((err, res) => {
                try {
                    expect(res.body[0].barcode).toEqual(5400141916229);
                    expect(res.body[0].product_name).toEqual("Salami");
                    expect(res.body[1].expiration_date).toEqual("2021-11-17");
                    expect(res.body[1].weight).toEqual(150);
                    done();
                } catch (err) {
                    done(err);
                }
            })
        })

        const getOnBarcode = {
            barcode: 5400141299649,
            product_name: "6 eieren",
            expiration_date: "2021-11-05",
            weight: 70,
            fridge_id: 1
        }

        it("/food/:barcode getting a specific item from the database", (done) => {
            REQUEST.get("/food/5400141299649").expect(200).end((err, res) => {
                try {
                    expect(res.body).toEqual(getOnBarcode);
                    done();
                } catch (err) {
                    done(err);
                }
            })
        })
    })


    describe("USER GET endpoints", () => {
        /**
         * 
         * GET USERS
         * 
         */

        it("/users endpoint of users", (done) => {
            REQUEST.get("/users").expect(200).end((err, res) => {
                try {
                    done();
                } catch (err) {
                    done(err);
                }
            })
        })

        it("/users length of endpoint of users", (done) => {
            REQUEST.get("/users").expect(200).end((err, res) => {
                try {
                    expect(res.body.length).toBe(2)
                    done();
                } catch (err) {
                    done(err);
                }
            })
        })
        it("/users validation of endpoints users", (done) => {
            REQUEST.get("/users").expect(200).end((err, res) => {
                try {
                    expect(res.body[0].id).toEqual(1);
                    expect(res.body[0].name).toEqual("Jari Miers");
                    expect(res.body[1].email).toEqual("fien.denblinden@student.ehb.be");
                    done();
                } catch (err) {
                    done(err);
                }
            })
        })

        const getOnUserId = {
            id: 1,
            name: "Jari Miers",
            email: "jari.miers@student.ehb.be",
            password: "test",
            fridge_id: 1
        }

        it("/user/:id getting a specific user from the database", (done) => {
            REQUEST.get("/user/1").expect(200).end((err, res) => {
                try {
                    expect(res.body).toEqual(getOnUserId);
                    done();
                } catch (err) {
                    done(err);
                }
            })
        })
    })
})


describe("Testing POST endpoints", () => {

    describe("FOOD POST endpoints", () => {
        /**
         * 
         * POST FOODS
         * 
         */

        const addFoodItem = {
            barcode: 5400141299627,
            product_name: "This is a test from the integration",
            expiration_date: "2021-12-04",
            weight: 69,
            fridge_id: 1
        }

        it("/ connect with endpoint that is not a post", (done) => {
            REQUEST.post("/").send(addFoodItem).expect(400).end((err, res) => {
                try {
                    done();
                } catch (err) {
                    done(err);
                }
            })
        })

        it("/food add food item", (done) => {

            REQUEST.post("/food").send(addFoodItem).expect(200).end((err, res) => {
                try {
                    expect(res.body.barcode).toEqual(addFoodItem.barcode);
                    expect(res.body.product_name).toEqual("This is a test from the integration");
                    expect(res.body.weight).toEqual(69);
                    done()
                } catch (err) {
                    done(err);
                }
            })
        })
    })


    describe("USER POST endpoint", () => {
        /**
         * 
         * POST USERS
         * 
         */

        const addUser = {
            id: 3,
            name: "Janneke",
            email: "janneke@outlook.com",
            password: "jeanke",
            fridge_id: 1
        }

        it("/user add user", (done) => {

            REQUEST.post("/user").send(addUser).expect(200).end((err, res) => {
                try {
                    expect(res.body.id).toEqual(addUser.id);
                    expect(res.body.name).toEqual("Janneke");
                    done()
                } catch (err) {
                    done(err);
                }
            })
        })
    })

})


// PUT TESTING DOES NOT WORK


// describe("Testing PUT endpoints", () => {
//     describe("FOOD UPDATE endpoint", () => {
//         /**
//          * 
//          * UPDATE FOOD
//          * 
//          */

//         // still problem ask teacher
//         it("/food/:barcode update", (done) => {
//             REQUEST.put("/food/5400141916229").expect(401).end((err, res) => {
//                 try {
//                     done();
//                 } catch (err) {
//                     done(err)
//                 }
//             })
//         })
//     })

//     describe("USER UPDATE endpoint", () => {
//         /**
//          * 
//          * UPDATE USER
//          * 
//          */


//         it("/user/:id update", (done) => {
//             REQUEST.put("/user/4").expect(401).end((err, res) => {
//                 try {
//                     done()
//                 } catch (err) {
//                     done(err)
//                 }
//             })
//         })

//     })
// });


describe("Testing DELETE endpoints", () => {

    describe("FOOD DELETE endpoint", ()=>{
    /**
     * 
     * DELETE FOODS
     * 
     */

     it("/food/:barcode FAIL delete", (done) => {
        REQUEST.delete("/food/123456789012").expect(401).end((err, res) => {
            try {
                done();
            } catch (err) {
                done(err);
            }
        })
    })


    it("/food/:barcode SUCCEED delete", (done)=>{
        REQUEST.delete("/food/5400141299649").expect(200).end((err,res)=>{
        try{
            KNEX("food").where("barcode", 5400141299649).then((data)=>{

                expect(data).toEqual([]);
                done();
            })
        }catch(err){
            done(err);
        }
        })
    })
    })

    describe("USER DELETE endpoint", ()=>{
        /**
     * 
     * DELETE USER
     * 
     */

    // still problem ask teacher
    it("/user/:id SUCCEED delete", (done)=>{
        REQUEST.delete("/user/2").expect(200).end((err,res)=>{
            try{
                KNEX("users").where("id", 2).then((data)=>{
                    expect(data).toEqual([]);
                    done();
                })
            }catch(err){
                done(err)
            }
        })
    })
    })

})

afterAll(async () => {
    try {
        KNEX.destroy();
    } catch (err) {
        console.log(err);
    }
})