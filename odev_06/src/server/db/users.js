const users = new Map();

getUser = (id) => users.get(id);

veriyUser = (id,password) => {
    const user = getUser(id);

    if(!user){
        return false;
    }

    return user.password === password;

}

createUser = (id,password) => {


    if(getUser(id)){
        return false
    }

    const user = {
        id,
        password,
        victories:0,
        defeats:0,
      
    }

    users.set(id,user);

    return true;
}


resetAllUsers = () => users.clear();


reportEndOfMatch = (userid,isVictory) => {

    const user = getUser(userid);

    if(!user){

        throw "Geçersiz ID"

    }

    if(isVictory){
        user.victories++;
    }else{
        user.defeats++;
    }
}

module.exports = {getUser,veriyUser,createUser,resetAllUsers,reportEndOfMatch}