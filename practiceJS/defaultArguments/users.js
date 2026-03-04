function User (id) {
    this.id = id;
    console.log("Assign ID to the user");
}

function generateID (){
    console.log("ID");
    return Math.random() * 999999;
}

function createAdminUser(user = new User(generateID())){
    user.admin = true;
    console.log("Granted admin user");
    return user;
}

createAdminUser();

/*

we user default arguments, user is created in the function

function createAdminUser(user){
    user.admin = true;
    console.log("Granted admin user");
    return user;
}

createAdminUser(new User(generateID()));
*/