const users = [
    {   
        id      : 1,
        name    : "virak", 
        gender  : "male"
    },
    {   
        id      : 2,
        name    : "thaka",
        gender  : "male"
    },
    {   
        id      : 3,
        name    : "watey", 
        gender  : "female"
    }
]; 

module.exports = class User {
    constructor(name,gender) {
        this.id = users[users.length-1].id + 1;
        this.name = name;
        this.gender = gender;
    }
    save() {
        users.push(this);
    }

    static fetchAll() {
        return users;
    }
}