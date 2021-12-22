function checkPostUser(user){
    if(!user || !user.id || !user.name || !user.email || !user.password){
        return false
    } if(!checkUserId(user.id) || !checkUserName(user.name) || !checkUserEmail(user.email) || !checkUserPassword(user.password)){
        return false
    }
    else{
        return true
    }
}

function checkUserId(id){
    if(!id || id<1){
        return false
    }else{
        return true
    }
}

function checkUserName(name){
    if(!name || !name.length){
        return false
    }else{
        return true
    }
}

function checkUserEmail(email){
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.match(emailRegex)){
        return true
    }else{
        return false
    }
}

function checkUserPassword(password){
    if(!password || !password.length){
        return false
    }else{
        return true
    }
}

module.exports = {checkPostUser, checkUserName, checkUserEmail, checkUserPassword}