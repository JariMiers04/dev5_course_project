const {KNEX} = require("../knex");


const SEED ={
    async insertData(){

        try{

                    // adding a fridge id 

                    await KNEX.table('fridge').insert({
                        id: 1,
                    })

        // adding food items to postgress database 
            await KNEX.table('food').insert([{
                barcode: 5400141916229,
                product_name: "Salami",
                expiration_date: "2021-12-27",
                weight: 40,
                fridge_id: 1
            },{
                barcode: 54001418377312,
                product_name: "Gerookte varkensworstjes",
                expiration_date: "2021-11-17",
                weight: 150,
                fridge_id: 1
            },{
                barcode: 5400141299649,
                product_name: "6 eieren",
                expiration_date: "2021-11-05",
                weight: 70,
                fridge_id: 1
            }]);

                    // adding users to postgres database
                    await KNEX('users').insert([{
                        id: 1,
                        name: "Jari Miers",
                        email: "jari.miers@student.ehb.be",
                        password: "test",
                        fridge_id: 1
                    },{
                        id: 2,
                        name: "Fien Denblinden",
                        email: "fien.denblinden@student.ehb.be",
                        password: "test2",
                        fridge_id: 1
                    }]);
        
        }catch(err){
            console.log(err);
            // process.exit(1);
        }
    }
}

module.exports = {SEED};