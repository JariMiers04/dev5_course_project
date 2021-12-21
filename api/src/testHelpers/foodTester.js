let currentDate = new Date();

let day = currentDate.getDate();
let month = currentDate.getMonth();
let year = currentDate.getFullYear();

function checkPostFood(food){
    if(!food || !food.barcode || !food.product_name || !food.expiration_date || !food.weight || !food.fridge_id){
        return false
    } if(!checkFoodBarcode(food.barcode) || !checkExpirationDate(food.expiration_date) || !checkFoodProductName(food.product_name) || !checkFoodWeight(food.weight)){
        return false
    }
    else{
        return true
    }
}

function checkFoodBarcode(barcode){
    if(barcode.toString().length === 13 ){
        return true
    }else{
        return false
    }
}

function checkFoodProductName(product_name){
    if(!product_name || !product_name.length){
        return false
    }else{
        return true
    }
}

function checkExpirationDate(expiration_date){
    if(expiration_date < `${year}-${month}-${day}`){
        return false
    }else{
        return true
    }
}


function checkFoodWeight(weight){
    if(weight == 0){
        return false
    }else{
        return true
    }
}


module.exports = {checkPostFood, checkExpirationDate, checkFoodWeight, checkFoodProductName,checkFoodBarcode}