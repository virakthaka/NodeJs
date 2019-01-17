const User = require('../model/user');

exports.getUsers = (req, res, next) => {
    res.render('user', {
        users: User.fetchAll()
    });
};

exports.showUserProfile = (req, res, next) => {
    res.render('profile', {
        user: {name: "thaka",id: req.params.user_id,gender: "male"}
    });
}

exports.insertUser = (req, res, next) => {
    const dataBody = req.body;
    const user = new User(dataBody.name,dataBody.gender);
    
    user.save();
    res.redirect('/users');
};

exports.deleteUser = (req, res, next) => {
    //remove..
    res.redirect('/users');
};

exports.updateUser = (req, res, next) => {
    //update..
    res.redirect('/users');
};